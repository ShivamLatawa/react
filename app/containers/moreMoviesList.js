import React from "react";
import {connect} from "react-redux";
import MovieList from "../components/MovieList";
import {fetchMoreMovies} from "../actions/moreMovies";


export const mapStateToProps = (state) => {
    return {
        data: state.moreMovies.data
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchMoreMovies: () => dispatch(fetchMoreMovies()),
    }
};

export default connect(mapStateToProps)(MovieList);
