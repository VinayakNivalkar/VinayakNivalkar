import { expect, test } from '@playwright/test'

test('renders the homepage, navigation, and bundled icons', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Vinayak Nivalkar' })).toBeVisible()
  await expect(page.locator('svg').first()).toBeVisible()
  await page.getByRole('link', { name: 'Blog' }).click()
  await expect(page).toHaveURL(/\/blog\/?$/)
})

test('renders the blog listing and a blog post', async ({ page }) => {
  await page.goto('/blog')

  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  await page.getByRole('link', { name: /Contact Card/ }).click()
  await expect(page.getByRole('heading', { name: 'Contact Card', exact: true })).toBeVisible()
  await expect(page.getByText('I got my Contact Cards printed')).toBeVisible()
})

test('renders a missing blog fallback', async ({ page }) => {
  await page.goto('/blog/does-not-exist')

  await expect(page.getByText("This Blog doesn't Exist")).toBeVisible()
  await expect(page.getByRole('button', { name: 'Go To Blogs' })).toBeVisible()
})

test('shows success and failure states for contact submissions', async ({ page }) => {
  await page.goto('/')
  await page.route('https://api.vnyk.me/v1/messages', route => route.fulfill({ status: 200, body: '{}' }))

  await page.getByPlaceholder('Email').first().fill('hello@example.com')
  await page.getByPlaceholder('Message').fill('Hello')
  await page.getByPlaceholder('Name').fill('Vinayak')
  await page.getByRole('button', { name: 'submit' }).click()
  await expect(page.getByText('Message Sent')).toBeVisible()

  await page.locator('body').click({ position: { x: 5, y: 5 } })
  await page.unroute('https://api.vnyk.me/v1/messages')
  await page.route('https://api.vnyk.me/v1/messages', route => route.fulfill({ status: 500, body: '{}' }))
  await page.getByRole('button', { name: 'submit' }).click()
  await expect(page.getByText('Unable to Send Message')).toBeVisible()
})
