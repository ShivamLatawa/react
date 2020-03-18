import {Cmd, loop} from "redux-loop";
import {FETCH_MORE_MOVIES, receiveMoreMoviesData, RECEIVE_MORE_MOVIES_DATA} from "../actions/moreMovies";
import {fetchMoreMovies} from "../effects/fetchMoreMovies";

export default (state, action) => {

    switch (action.type) {
        case FETCH_MORE_MOVIES:
            return loop(
                state,
                Cmd.run(fetchMoreMovies, {
                    args: [],
                    successActionCreator: receiveMoreMoviesData,
                    failActionCreator: console.log
                })
            );

        case RECEIVE_MORE_MOVIES_DATA:
            return {
                ...state,
                data: action.payload.data
            };

        default:
            return state;
    }
}
