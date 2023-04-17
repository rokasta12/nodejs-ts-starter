// src/validators/zodValidator.ts
import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const bodyValidator =
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>


		(schema: ZodSchema<any>) =>
		(req: Request, res: Response, next: NextFunction): void => {
			try {
				schema.parse(req.body);
				next();
			} catch (error) {
				if (error instanceof ZodError) {
					const errors = error.issues.map((issue) => {
						const path = issue.path.join(".");
						const message = issue.message;
						return `${path ? `${path}: ` : ""}${message}`;
					});
					res.status(400).json({ errors });
				} else {
					console.error("Unexpected error during validation:", error);
					res.status(500).json({
						error: "Unexpected error during validation",
					});
				}
			}
		};
