import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
	_id: { type: String },
	expires: { type: String },
	session: { type: String },
});

const Session = mongoose.model("sessions", sessionSchema);

export default Session;
