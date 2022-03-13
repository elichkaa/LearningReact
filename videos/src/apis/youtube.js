import axios from "axios";

const KEY = "AIzaSyDSOY1raU6rOWkhlNbd_TROeYkPFhZmzwM";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
