import React from "react";
import Jumbotron from "../containers/jumbotron";
import MovieList from "../containers/movieList";
import SeriesList from "../containers/seriesList";

const HomePage = () =>
    <div className="home-page">
        <Jumbotron/>
        <div className="container">
            <h1>Movies</h1>
            <MovieList/>
            <h1>Series</h1>
            <SeriesList/>
        </div>
    </div>;

export default HomePage;
