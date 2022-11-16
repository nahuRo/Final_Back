import express from "express";
import routes from "./routes/routeIndex.js";
import cors from "cors";
import { PORT } from "./utils/config.js";

// para socket
import { Server as IOServer } from "socket.io";

// DBs
import { ConnectionDB } from "./database/config/configMongo.js";

import session from "express-session";
import mongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

// traigo los constructores para instaciar
import smsDAO from "./database/daos/smsDAO.js";

const app = express();

// Middleware
app.use(cookieParser());
app.use(
	session({
		store: mongoStore.create({
			mongoUrl:
				"mongodb+srv://agussCoder:agus123@cluster0.ezyymjl.mongodb.net/Final_Ecomercee?retryWrites=true&w=majority",
			mongoOptions: {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		}),
		secret: "coderhouse",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 15000,
		},
	})
);

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(express.json()); //midu usa solo este middleware
app.use(express.urlencoded({ extended: true }));

// conexion con mongoose
ConnectionDB();

// ---- instacio
const Message = new smsDAO();

// escuchando puerto
const expressServer = app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`sevidor iniciado en http://localhost:${PORT}/`);
});

// socket.io
const io = new IOServer(expressServer, {
	cors: {
		origin: "*",
	},
});

// estableciendo conexion desde el server (back)
io.on("connection", async (socket) => {
	let listMsg = await Message.getAll();

	console.log("se conecto un nuevo cliente", socket.id);

	// para cuando se conecte ese nuevo socket, le envio los mensajes y productos que hay hasta el momento
	socket.emit("server:mensaje", listMsg);

	// atajo la info de los mensajes del socket
	socket.on("cliente:mensaje", async (messageInfo) => {
		await Message.save(messageInfo); // escribo el sms en un txt y en el metodo pusheo el messageInfo a le array de mensajes

		listMsg = await Message.getAll();
		// no se bien que hace este emit, con el 1er socket , me imprime los mensajes qu estoy escribiendo
		io.emit("server:mensaje", listMsg); // le paso todos los mensajes al socket actual
	});
});

app.use("/api", routes);

// Atajo URLs no validas
app.use((req, res) => {
	res.status(404).json({
		error: -1,
		descripcion: req.path,
		método: "no autorizada",
	});
});
