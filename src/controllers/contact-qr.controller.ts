import prisma from "../prisma";
import { Request, Response } from "express";
import { uuid } from "uuidv4";
import { GetMyContactSchema } from "~/schemas/contact-qr.schema";

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

export const getMyContact = async (req: Request, res: Response) => {
	try {
		const { code } = req.params;
		const userID = (req.body as GetMyContactSchema).userID;
		const contact = await prisma.contactQR.findFirst({
			where: { code: code, userID: userID },
		});
		res.status(200).json(contact);
	} catch (error) {
		console.error("Error getting contact by code:", error);
		res.status(500).json({ error: "Error getting contact by code" });
	}
};

export const updateContact = async (req: Request, res: Response) => {
	try {
		const { code } = req.params;
		const contactToUpdate = await prisma.contactQR.findFirst({
			where: { code: code, userID: req.body.userID },
		});

		if (!contactToUpdate) {
			res.status(404).json({ error: "Contact not found" });
		} else {
			const updatedContact = await prisma.contactQR.update({
				where: { code: code },
				data: { ...req.body },
			});

			res.status(200).json(updatedContact);
		}
	} catch (error) {
		console.error("Error updating contact:", error);
		res.status(500).json({ error: "Error updating contact" });
	}
};
