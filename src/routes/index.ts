import { contactQRRouter } from "./contact-qr.router";
import { geoipRouter } from "./geoip.router";
import { healthCheckRouter } from "./health-check.router";

export const appRoutes = [contactQRRouter, healthCheckRouter, geoipRouter];
