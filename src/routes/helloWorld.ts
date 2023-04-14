// routes/helloWorld.ts
import { Router, Request, Response } from "express";

export const helloWorldRouter = Router();

helloWorldRouter.get("/", (req: Request, res: Response) => {
	res.send("Hello, World!");
});
