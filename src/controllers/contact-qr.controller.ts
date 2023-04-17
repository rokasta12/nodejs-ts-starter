import prisma from "../prisma";
import { Request, Response } from "express";
import { uuid } from "uuidv4";

export const createContact = async (req: Request, res: Response) => {
	try {
		const newUser = await prisma.contactQR.create({
			data: { ...req.body, code: uuid() },
		});
		res.status(201).json(newUser);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Error creating user" });
	}
};
export const getAllContacts = async (req: Request, res: Response) => {
	try {
		const allContacts = await prisma.contactQR.findMany();
		res.status(200).json(allContacts);
	} catch (error) {
		console.error("Error getting all contacts:", error);
		res.status(500).json({ error: "Error getting all contacts" });
	}
};

export const getContactByCode = async (req: Request, res: Response) => {
	try {
		const { code } = req.params;
		const contact = await prisma.contactQR.findUnique({
			where: { code: code },
		});
		res.status(200).json(contact);
	} catch (error) {
		console.error("Error getting contact by code:", error);
		res.status(500).json({ error: "Error getting contact by code" });
	}
};
