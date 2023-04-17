import {
	createContact,
	getAllContacts,
	getContactByCode,
} from "../controllers/contact-qr.controller";
import { createContactSchema } from "../schemas/contact-qr.schema";
import { bodyValidator } from "../utils/body-validator";
import { Router } from "express";

export const contactQRRouter = Router();

contactQRRouter.post(
	"/contact-qr",
	bodyValidator(createContactSchema),
	createContact
);

contactQRRouter.get("/contact-qr", getAllContacts);

contactQRRouter.get("/contact-qr/:code", getContactByCode);
