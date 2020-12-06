import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/theatresShowTimes/";

export function getTheatresShowTimes() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}


export function getShowTimesByTheatres(theatre) {
    return fetch(baseUrl + "?theatre=" + theatre)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json().then(theatreTimings => {
                if (theatreTimings.length !== 1) throw new Error("Theatre not found: " + theatre);
                return theatreTimings[0]; // should only find one course for a given theatre, so return it.
            });
        })
        .catch(handleError);
}
