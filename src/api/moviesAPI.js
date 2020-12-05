import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/movies/";

export function getMovies() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}


export function deleteMovies(movieId) {
    return fetch(baseUrl + movieId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
