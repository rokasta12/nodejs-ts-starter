import { geoipQueySchema } from "../schemas/geoip.schema";
import { bodyValidator } from "../utils/body-validator";
import { Router } from "express";
import { geoipQuery } from "../controllers/geoip.controller";

export const geoipRouter = Router();

geoipRouter.post("/geoip", bodyValidator(geoipQueySchema), geoipQuery);
