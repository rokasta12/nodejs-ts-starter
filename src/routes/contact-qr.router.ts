import {
	createContact,
	getAllContacts,
	getContactByCode,
	getMyContact,
	updateContact,
} from "../controllers/contact-qr.controller";
import {
	createContactSchema,
	getMyContactSchema,
	updateContactSchema,
} from "../schemas/contact-qr.schema";
import { bodyValidator } from "../utils/body-validator";
import { Router } from "express";

export const contactQRRouter = Router();

contactQRRouter.post(
	"/contact-qr",
	bodyValidator(createContactSchema),
	createContact
);

contactQRRouter.get("/contact-qr", getAllContacts);

contactQRRouter.post(
	"/contact-qr/my-code",
	bodyValidator(getMyContactSchema),
	getMyContact
);

contactQRRouter.get("/contact-qr/:code", getContactByCode);

contactQRRouter.patch(
	"/contact-qr/:code",
	bodyValidator(updateContactSchema),
	updateContact
);
