import { createTransport } from "nodemailer";
import { FROM_MAIL, PASS_MAIL, PORT_TRANSPORTER } from "./config.js";

export const transporter = createTransport({
	service: "gmail",
	port: PORT_TRANSPORTER,
	auth: {
		user: FROM_MAIL, // mail que envia
		pass: PASS_MAIL, // pass general del mail que envia
	},
});
