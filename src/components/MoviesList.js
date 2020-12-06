import React, { useState, useEffect } from "react";
import { getTheatresShowTimes } from "../api/theatresShowTimesAPI";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function MoviesList(props) {
    const [theatreTimes, setTheatreTimes] = useState([]);
    let count = 0;

    useEffect(() => {
        getTheatresShowTimes().then((_theatreTimes) =>
            setTheatreTimes(_theatreTimes)
        );
    }, [count]);

    return (
        <div>
            <Tabs>
                <TabList>
                    {theatreTimes.map((theatres) => {
                        return(
                            <Tab>{theatres.name}</Tab>
                        )
                    })}
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
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </TabList>
            </Tabs>
        </div>
    );
}

export default MoviesList;
