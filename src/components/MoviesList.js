import React, { useState, useEffect } from "react";
import { getTheatresShowTimes } from "../api/theatresShowTimesAPI";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function MoviesList(props) {
    const [theatreTimes, setTheatreTimes] = useState([]);
    let count = 0;

    useEffect(() => {
        getTheatresShowTimes().then((_theatreTimes) =>
            setTheatreTimes(_theatreTimes)
        );
    }, [count]);

    function theatreShowTimes(movie, countValue) {
        count = countValue;
        theatreTimes.map((showTime) => {
            let theatreTimings = showTime.showtimes;
            Object.keys(theatreTimings).forEach((theatreId) => {
                if (movie.id === theatreId) {
                    // return Object.values(theatreTimings[theatreId]);
                    console.log("Movie ", movie.id);
                    console.log(
                        "SHow",
                        JSON.stringify(Object.values(theatreTimings[theatreId]))
                    );
                    return Object.values(theatreTimings[theatreId]);
                } else return "Karthik";
            });
        });
    }

    return (
        <div>
        <table className="table">
            <tbody>
            {props.movies.map((movie) => {
                return (
                    <tr>
                        <td>
                            <img alt="poster" width="170" src={movie.poster} />
                        </td>
                        <td>
                            <div
                                style={{
                                    marginLeft: "200px",
                                }}
                            >
                                {" "}
                                {movie.title} ({movie.rating})
                                <div> &nbsp; </div>
                                <div>
                                    {theatreShowTimes(movie, 1)}{" "}
                                </div>
                            </div>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default MoviesList;
