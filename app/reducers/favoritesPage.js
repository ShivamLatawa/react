import {ADD_TO_FAVORITES, SELECTE_MOVIE} from "../actions/favourites";


export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const type = action.payload.movie.Type;
            const data = state.data;

            data[type] = data[type].concat(action.payload.movie);


            return {
                ...state,
                data,
            };
        }
        case SELECTE_MOVIE: {
            const data = state.data;
            data["selectedMovie"] = action.payload.movie;
            return {
                ...state,
                data,
            };
        }

        default:
            return state;
    }

}
