import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID H7XWXn5shz1RMb15bmzXIHdoMg3Ny5O0Zls9fxQfdYA",
	},
});
