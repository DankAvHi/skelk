import dotenv from "dotenv";
import { CookieOptions } from "express";
import path from "path";

export const isDevelopment = process.env.NODE_ENV == "development" || process.argv[2] === "development";

dotenv.config({
     path: path.resolve(process.cwd(), ".env"),
});

export const {
     HOST,
     NODE_ENV = "production",
     HTTPS_PORT,
     HTTP_PORT,
     SSL_CERT_PATH,
     SSL_KEY_PATH,
     DATABASE_URL,
     COOKIE_SECRET,
     SESSION_SECRET,
     SESSION_EXPIRY,
     REFRESH_TOKEN_EXPIRY = "60 * 60 * 24 * 30 * 1000",
} = process.env;

export const SECURE = process.argv[3] === "secure" || process.env.SECURE == "true";
export const UPLOADS_PATH = path.resolve(process.cwd(), "uploads");
export const CLIENT_PATH = path.resolve(process.cwd(), "client", "dist");
export const CLIENT_INDEX_PATH = path.resolve(CLIENT_PATH, "index.html");

export const COOKIE_OPTIONS: CookieOptions = {
     httpOnly: SECURE,
     secure: SECURE,
     signed: true,
     maxAge: eval(REFRESH_TOKEN_EXPIRY),
     sameSite: false,
};
