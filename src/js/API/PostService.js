import axios from "axios"

export default class PostService {
	static async getAll() {
		try {
			const responce = await axios.get('http://localhost:3000/list');
			return responce.data
		} catch (e) {
			console.log(e);
		}
	}

}
