import {combineReducers} from 'redux-loop'
import {routerReducer} from 'react-router-redux'

import homePageReducer from './homePage';
import favoritesPageReducer from './favoritesPage';

const rootReducer = combineReducers({
	homePage: homePageReducer,
	favoritesPage: favoritesPageReducer,
	router: routerReducer
});

export default rootReducer;
