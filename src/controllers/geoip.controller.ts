import { Request, Response } from "express";
import { GeoipQuery } from "~/schemas/geoip.schema";
import geoip from "geoip-lite";

export const geoipQuery = async (req: Request, res: Response) => {
	try {
		const ip = (req.body as GeoipQuery).ip;
		const geo = geoip.lookup(ip);
		res.status(200).json(geo);
	} catch (error) {
		console.error("Error while looking up", error);
		res.status(500).json({ error: "Error while looking up" });
	}
};
