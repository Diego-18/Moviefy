import ApiMovies from "@/services/ApiMovies";

function getMovies(movie) {
	let apikey = "cd112c6a";
	return ApiMovies().get("/?s=" + movie + "&apikey=" + apikey);
}

function getMoviesDetails(id) {
	let apikey = "cd112c6a";
	return ApiMovies().get("/?i=" + id + "&apikey=" + apikey);
}

export default { getMovies, getMoviesDetails };
