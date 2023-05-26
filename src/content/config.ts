import { z, defineCollection } from "astro:content"

const poolSchema = defineCollection({
	schema: z.object({
		name: z.string(),
		url: z.string().url(),
		thumb: z.string().optional(),
		type: z.string(),
		tag: z.enum(["plat", "progressif", "composable"]),
		composable: z.boolean().optional(),
		description: z.string(),
		advantages: z.array(z.string()).optional(),
		dimension: z.array(
			z.object({
				long: z.string(),
				larg: z.string(),
				prof: z.string(),
			})
		),
		attribut: z.object({
			equipment: z
				.array(
					z.object({
						name: z.string(),
						quantity: z.number(),
					})
				)
				.optional(),
			specifics: z
				.object({
					typeDeFond: z.string(),
					volet: z.string(),
					escalier: z.string(),
					espaceDetente: z.string(),
				})
				.optional(),
		}),
		images: z.array(z.string()),
	}),
})

export const collections = { pools: poolSchema }
