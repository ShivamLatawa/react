import createHistory from "history/createBrowserHistory";
import {applyMiddleware, compose, createStore} from "redux";
import {install} from "redux-loop";
import {routerMiddleware} from "react-router-redux";
import persistState from "redux-localstorage";
import rootReducer from "../reducers";

export const history = createHistory();

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(middleware),
            install(),
            persistState(),
        )
    );
}
