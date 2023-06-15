import prisma from "../prisma";
import { Request, Response } from "express";

export const getConfig = async (req: Request, res: Response) => {
	try {
		const activeConfig = await prisma.config.findFirst({
			where: { isActive: true },
		});
		res.status(200).json(activeConfig);
	} catch (error) {
		console.error("Error configuration:", error);
		res.status(500).json({ error: "Error configuration" });
	}
};

export const createConfig = async (req: Request, res: Response) => {
	try {
		const newConfig = await prisma.config.create({
			data: req.body,
		});
		res.status(201).json(newConfig);
	} catch (error) {
		console.error("Error configuration:", error);
		res.status(500).json({ error: "Error configuration" });
	}
};
