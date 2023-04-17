// src/schemas/contactSchema.ts
import { z } from "zod";

export const createContactSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string(),
	image: z.string().optional(),
	userID: z.string(),
	socials: z.any().optional(),
});

export const updateContactSchema = z.object({
	name: z.string().optional(),
	email: z.string().email().optional(),
	phone: z.string().optional(),
	image: z.string().optional(),
	socials: z.any().optional(),
});

export const getMyContactSchema = z.object({
	userID: z.string(),
});

export type GetMyContactSchema = z.infer<typeof getMyContactSchema>;
