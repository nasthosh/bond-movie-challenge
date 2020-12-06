import React, {useState, useEffect} from 'react';
import { getMovies } from "../api/moviesAPI";
import { getTheatresShowTimes } from "../api/theatresShowTimesAPI";
import MoviesList from "./MoviesList"
import {Input} from "semantic-ui-react";

function MovPage() {
    const [movies, setMovies] = useState([]);
    const [search,setSearch] = useState("");
    let count=0;

    useEffect(() => {
        getMovies().then(_movies => setMovies(_movies));
    }, []);

    // useEffect(() => {
    //     getTheatresShowTimes().then(_theatreTimes => setTheatreTimes(_theatreTimes));
    // }, []);


    function searchItem(movies) {
        return movies.filter(movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }

    return(
        <div>
            <div>
                <input
                    style={{
                        fontSize: 24,
                        display: "block",
                        width: "100%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                    }} type="text" value={search} placeholder="Search for" className="search" onChange={(event) => setSearch(event.target.value)}/>
            </div>

            <div>
                <MoviesList movies={searchItem(movies)} />
            </div>

        </div>
    )
}

export default MovPage
