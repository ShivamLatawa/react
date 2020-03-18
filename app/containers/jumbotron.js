import React from 'react';
import {connect} from "react-redux";
import {startFetchingContent} from '../actions/home';
import Jumbotron from '../components/Jumbotron';

export const mapStateToProps = (state) => {
	return {
		name: state.homePage.name,
	}
};

export const mapDispatchToProps = (dispatch) => {
	return {
        startFetchingData: (movies) => dispatch(startFetchingContent(movies)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron);
