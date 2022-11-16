import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "./config.js";

// const privateKey = JWT_PRIVATE_KEY;

export const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;

	console.log("a", authHeader);

	if (!authHeader) {
		return res.status(401).json({
			error: true,
			message: "You dont hace permission to visit this page",
		});
	}

	const token = authHeader.split(" ")[1];

	jwt.verify(token, JWT_PRIVATE_KEY, (err, decodedPayload) => {
		if (err) {
			return res.status(401).json({
				error: true,
				message: "You dont hace permission to visit this page",
			});
		}

		req.user = decodedPayload.data;
		req.token = token;

		next();
	});
};

export const generateToken = (user) => {
	const payload = {
		data: {
			username: user.name,
			email: user.email,
		},
	};
	return jwt.sign(payload, JWT_PRIVATE_KEY, { expiresIn: "30m" });
};
