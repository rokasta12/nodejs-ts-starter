import { createConfig, getConfig } from "../controllers/healthcheck.controller";
import { createConfigSchema } from "../schemas/config.schema";
import { bodyValidator } from "../utils/body-validator";
// routes/helloWorld.ts
import { Request, Response, Router } from "express";

export const healthCheckRouter = Router();

healthCheckRouter.get("/healthcheck", (req: Request, res: Response) => {
	res.send("OK!");
});

/* healthCheckRouter.post(
	"/healthcheck/config",
	bodyValidator(createConfigSchema),
	createConfig
); */

healthCheckRouter.get("/healthcheck/config", getConfig);
