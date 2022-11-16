import twilio from "twilio";
import { ACCOUNT_SID, AUTH_TOKEN } from "./config.js";

export const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);
