import { config as myConfig } from "dotenv";
myConfig();

export const PORT = process.env.PORT || 4000;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

export const DB_URI = process.env.DB_URI;

export const PORT_TRANSPORTER = process.env.PORT_TRANSPORTER;
export const FROM_MAIL = process.env.FROM_MAIL;
export const TO_MAIL = process.env.TO_MAIL;
export const PASS_MAIL = process.env.PASS_MAIL;
export const ACCOUNT_SID = process.env.ACCOUNT_SID;
export const AUTH_TOKEN = process.env.AUTH_TOKEN;
export const TO_SMS_NUMBER = process.env.TO_SMS_NUMBER;
export const TO_WSP_NUMBER = process.env.TO_WSP_NUMBER;
export const WSP_TWILIO_NUMBER = process.env.WSP_TWILIO_NUMBER;
