import {Cmd, loop} from "redux-loop";
import {ADD_TO_FAVORITES, RECEIVE_DATA, receiveData, REQUEST_MOVIES_DATA} from "../actions/home";
import {fetchMovies} from "../effects/fetchMovies";

export default (state, action) => {

    switch (action.type) {
        case REQUEST_MOVIES_DATA:
            const whatToFetch = action.payload.whatToFetch;

            return loop(
                state,
                Cmd.run(fetchMovies, {
                    args: [whatToFetch],
                    successActionCreator: receiveData.bind(this, whatToFetch),
                    failActionCreator: console.log
                })
            );

        case RECEIVE_DATA:
            const contentType = action.payload.whatToFetch;
            const data = Object.assign({}, state.data);

            data[contentType] = action.payload.data;

            return {
                ...state,
                data,
            };

        case ADD_TO_FAVORITES: {
            const type = action.payload.movie.Type;
            const addedFavorites = Object.assign({},state.addedFavorites);

            addedFavorites[type] = addedFavorites[type].concat(action.payload.movie.imdbID);

            return {
                ...state,
                addedFavorites,
            };
        }

        default:
            return state;
    }
}
