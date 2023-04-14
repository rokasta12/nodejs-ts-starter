import { appRoutes } from "./routes";
import { contactQRRouter } from "./routes/contact-qr";
import { helloWorldRouter } from "./routes/helloWorld";
// index.ts
import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1", appRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
