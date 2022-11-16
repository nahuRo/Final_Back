import mongoose from "mongoose";
import { DB_URI } from "../../utils/config.js";

export const ConnectionDB = () => {
	// conexion con la bd
	mongoose.connect(DB_URI, {}, (err) => {
		err
			? console.log("Error de Conexion", err)
			: console.log("Conexion con Exitosa con DB");
	});
};
