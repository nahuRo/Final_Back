// para rutas
import { Router } from "express";
const route = Router();

// controllers
import { postCart } from "../controllers/ordersController.js";

// ---- Rutas para cart ----

route

	// POST: '/' - Crea una orden
	.post("/", postCart);

export default route;
