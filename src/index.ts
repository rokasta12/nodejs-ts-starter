import { helloWorldRouter } from "./routes/helloWorld";
// index.ts
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/hello-world", helloWorldRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
