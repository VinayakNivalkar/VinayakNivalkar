import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        image: z.string().optional(),
        publishedOn: z.string().optional(),
        description: z.string().optional()
      })
    })
  }
})
