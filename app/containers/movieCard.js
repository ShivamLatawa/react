import React from "react";
import {connect} from "react-redux";
import MovieCard from "../components/MovieCard";
import {addToFavorites, selectMovie} from "../actions/favourites";

export const mapStateToProps = (state) => {
    return {
        addedFavorites: state.homePage.addedFavorites,
        selectedMovie: state.selectedMovie
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavoritesClick: (movie) => dispatch(addToFavorites(movie)),
        onSelectMovieClick: (movie) => dispatch(selectMovie(movie)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
