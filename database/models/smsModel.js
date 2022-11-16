import mongoose from "mongoose";

const smsSchema = new mongoose.Schema(
	{
		author: {
			name: { type: String, required: true, unique: false },
			email: { type: String, required: true, unique: false },
			alias: { type: String, required: true, unique: false },
		},
		text: { type: String, required: true, unique: false },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Sms = mongoose.model("messages", smsSchema);

export default Sms;
