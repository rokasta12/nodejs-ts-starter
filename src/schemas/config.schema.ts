// src/schemas/contactSchema.ts
import { z } from "zod";

export const createConfigSchema = z.object({
	name: z.string(),
	minimumVersion: z.string(),
	metaData: z.any().optional(),
	isActive: z.boolean().optional(),
});
