import React from "react";
import {connect} from "react-redux";
import MovieList from "../components/MovieList";


export const mapStateToProps = (state) => {
    return {
        data: state.favoritesPage.data.movie
    }
};

export default connect(mapStateToProps)(MovieList);
