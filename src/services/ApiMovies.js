import axios from "axios";

export default () => {
	return axios.create({
		baseURL: "https://www.omdbapi.com/",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	});
};
