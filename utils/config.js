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

// export const config = {
// 	DB_URI: "mongodb+srv://agussCoder:agus123@cluster0.ezyymjl.mongodb.net/16voDesafio?retryWrites=true&w=majority",
// 	SESSION_SECRET: "coderHouse",
// 	FROM_MAIL: "agussrg80@gmail.com",
// 	TO_MAIL: "lifetvtone@gmail.com",
// 	PASS_MAIL: "fdcxfyxyvugppwph",
// 	accountSid: "AC43f5267cf209586a2028d60f52748eed",
// 	authToken: "464aeba0108e8fba28cbc70490904d3f",
// 	toSmsNumber: "+542613867729",
// 	toWspNumber: "+5492613867729",
// 	wspTwilioNumber: "+14155238886",
// };
