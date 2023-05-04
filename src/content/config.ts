import { z, defineCollection } from "astro:content"

const pool = defineCollection({
	schema: z.object({
		name: z.string(),
		url: z.string().url(),
		thumb: z.string().optional(),
		type: z.string(),
		tag: z.string(),
		description: z.string(),
		colors: z
			.array(
				z.object({
					pastille: z.string(),
					colorname: z.string(),
				})
			)
			.optional(),
		images: z.array(z.string()),
		dimension: z.array(
			z.object({
				long: z.string(),
				larg: z.string(),
				prof: z.string(),
			})
		),
	}),
})

export const collections = { pool }
