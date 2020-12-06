import React from "react";
import { getMovies } from "../api/moviesAPI";
import { getTheatresShowTimes } from "../api/theatresShowTimesAPI";

class MoviesPage extends React.Component {
    state = {
        movies: [],
        showTimes: [],
        searchMovie: ''
    };

    componentDidMount() {
        getMovies().then((movies) => {
            this.setState({ movies: movies });
        });

        getTheatresShowTimes().then((showTimes) => {
            console.log("Show ", JSON.stringify(showTimes.showtimes));
            this.setState({ showTimes: showTimes });
        });
    }

    searchBarMovies = (e) => {
        this.setState({searchMovie: e.target.value})
        console.log("Value ", e.target.value)
    }

    theatreTimes(movie) {
        {
            this.state.showTimes.map((showTime) => {
                let theatreTimings = showTime.showtimes;
                // console.log("SHow", JSON.stringify(Object.keys(theatreTimings)))
                Object.keys(theatreTimings).forEach((theatreId) => {
                    if (movie.id === theatreId) {
                        // return Object.values(theatreTimings[theatreId]);
                        // console.log("Movie ", movie.id);
                        // console.log(
                        //     "SHow",
                        //     JSON.stringify(Object.values(theatreTimings[theatreId]))
                        // );
                        return "Santhosh";
                    } else return "Karthik";
                });
            });
        }
    }

    render() {
        let filteredMovies = this.state.movies.filter((movie) => {
            console.log("Movie", movie.title);
            return movie.title.indexOf(this.state.search) !== -1;
        });
        return (
            <>
                {" "}
                <h2> Movies </h2>
                <input
                    style={{
                        fontSize: 24,
                        display: "block",
                        width: "99%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                    }}
                    type= 'text' value = {this.state.searchMovie} onChange = {this.searchBarMovies.bind(this)}
                    placeholder="Enter search term"
                />
                <table className="table">
                    <tbody>
                    {filteredMovies.map((movie) => {
                        return (
                            <tr>
                                <td>
                                    <img
                                        alt="poster"
                                        style={{
                                            marginRight: "-140px",
                                        }}
                                        width="150"
                                        src={movie.poster}
                                    />
                                </td>
                                <td>
                                    {movie.title} ({movie.rating}){" "}
                                    <div>{this.theatreTimes(movie)}</div>{" "}
                                </td>
                                {/*{this.state.showTimes.map((showTime) => {*/}
                                {/*    let theatreTimings = showTime.showtimes;*/}
                                {/*    Object.keys(theatreTimings).forEach((theatreId) => {*/}
                                {/*        if(movie.id === theatreId){*/}
                                {/*            console.log("Print movies time : ",  JSON.stringify(Object.values(theatreTimings[theatreId])));*/}
                                {/*            return(<td> {Object.values(theatreTimings[theatreId])}</td>)*/}
                                {/*            // console.log("Print movies time : ",  JSON.stringify(Object.values(theatreTimings)));*/}
                                {/*        }*/}
                                {/*    })*/}
                                {/*})}*/}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>{" "}
            </>
        );
    }
}

export default MoviesPage;
