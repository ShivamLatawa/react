import React from 'react'
import {connect} from "react-redux"
import MovieList from '../components/MovieList'

// This is a container

export const mapStateToProps = (state) => {
	return {
		data: state.homePage.data.movies
	}
};

export default connect(mapStateToProps)(MovieList)
