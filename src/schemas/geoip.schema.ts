// src/schemas/contactSchema.ts
import { z } from "zod";

export const geoipQueySchema = z.object({
	ip: z.string(),
});

export type GeoipQuery = z.infer<typeof geoipQueySchema>;
