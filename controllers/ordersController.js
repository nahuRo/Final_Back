import { TO_MAIL, TO_SMS_NUMBER, TO_WSP_NUMBER, WSP_TWILIO_NUMBER } from "../utils/config.js";

// nodemailer
import { transporter } from "../utils/nodemailerr.js";

// sms twilio
import { client } from "../utils/twilio.js";

export const postCart = async (req, res) => {
	const { items, comprador, total, date } = req.body;

	// envio de pedido via mail
	const responseEmail = await transporter.sendMail({
		from: "Server Node.js",
		to: TO_MAIL, // mail al que le envio el mensaje
		subject: `Nuevo Pedido de: ${comprador.name} con email: ${comprador.email}`,
		html: ` ${items
			.map((prod) => {
				return `<h1 style="color:blue">Articulo</h1>
				<h3>Nombre: ${prod.tittle}</h3>
				<h3>Precio (usd): $ ${prod.price} </h3>
				<h3>Precio (ars): $ ${prod.ARS} </h3>
				<h3>Cantidad: ${prod.cantidad}</h3>
				<h3>Descripción: ${prod.descripcion}</h3>
				<h3>codeBar: ${prod.codeBar}</h3>
				<img style="width:300px" src=${prod.thumbnail}/>`;
			})
			.toString()}
				<h3>Total (usd): $ ${total}</h3>
				<h3>Fecha: ${date}</h3>

			`,
	});

	// envio de sms twilio
	await client.messages.create({
		body: "Su pedido ha sido recibido y se encuentra en proceso",
		messagingServiceSid: "MG7cf0cd35d95730fa35f667086c3652b4",
		to: TO_SMS_NUMBER,
	});

	// envio de whatsapp twilio
	await client.messages.create({
		body: `Nuevo Pedido\n\nde: ${comprador.name}\ncon email: ${comprador.email}`,
		from: `whatsapp:${WSP_TWILIO_NUMBER}`,
		to: `whatsapp:${TO_WSP_NUMBER}`,
	});

	const response = {
		email: responseEmail.rejected.length === 0,
	};

	res.json(response);
};
