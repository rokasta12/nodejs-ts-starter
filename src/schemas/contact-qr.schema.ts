// src/schemas/contactSchema.ts
import { z } from "zod";

export const createContactSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string(),
	image: z.string().optional(),
	userID: z.string(),
});
