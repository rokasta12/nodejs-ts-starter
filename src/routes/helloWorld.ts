// routes/helloWorld.ts
import { Request, Response, Router } from "express";

export const helloWorldRouter = Router();

helloWorldRouter.get("/hello-world", (req: Request, res: Response) => {
	res.send("Hello, World!");
});
