import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import {configureStore, history} from "./store/configure-store";
import App from "./pages/App";
import Styles from "../app/styles/app.scss";

const initialState = {
    homePage: {
        name: "React & Redux",
        data: {
            movies: [],
            episode: [],
            series: [],
        },
        addedFavorites: {
            movie: [],
            episode: [],
            series: [],
        },
    },
    favoritesPage: {
        data: {
            movie: [],
            episode: [],
            series: [],
        }
    },
    moreMovies: {
        data: [],
    }
};

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
