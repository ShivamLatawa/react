import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import Header from '../components/Header';
import Favorites from './Favorites';
import MovieDetail from "../components/MovieDetail";

const App = () =>
	<div>
		<Header/>
		<Route exact path="/" component={HomePage}/>
		<Route exact path="/favorites" component={Favorites}/>
		<Route exact path="/detail/:imdbID" component={MovieDetail}/>
	</div>;


export default App;
