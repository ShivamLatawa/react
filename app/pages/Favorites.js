import React from "react";
import MovieList from "../containers/favouritesMovieList";
import SeriesList from "../containers/favoriteSeriesList";


const Favorites = () =>
    <div className="favorites">
        <div className="container">
            <h1>Favorite Movies</h1>
            <MovieList />
            <h1>Favourite Series</h1>
            <SeriesList />
        </div>
    </div>

export default Favorites
