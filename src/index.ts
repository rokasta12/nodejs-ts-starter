import express from "express";

import { appRoutes } from "./routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/v1", appRoutes);
app.use("/", (req, res, next) => {
	res.status(200).send("OK");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
