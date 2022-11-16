import CustomError from "../clases/CustomError.js";
import Sms from "../models/smsModel.js";

class ProdDAO {
	constructor() {
		this.collection = Sms;
	}

	async save(object) {
		try {
			const item = new this.collection(object);
			await item.save();
			return console.log("mensaje guardado");
		} catch (error) {
			console.log(error);

			throw new CustomError(500, "Hubo un error en - save SMS");
		}
	}
	async getAll() {
		try {
			return await this.collection.find();
		} catch (error) {
			console.log(error);

			throw new CustomError(500, "Hubo un error en - getAll SMS");
		}
	}
}

export default ProdDAO;
