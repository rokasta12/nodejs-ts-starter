// routes/helloWorld.ts
import { Request, Response, Router } from "express";

export const healthCheckRouter = Router();

healthCheckRouter.get("/healthcheck", (req: Request, res: Response) => {
	res.send("OK!");
});
