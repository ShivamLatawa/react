export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const SELECTE_MOVIE = "SELECTE_MOVIE";

export function addToFavorites(movie) {
    return {
        type: ADD_TO_FAVORITES,
        payload: {
            movie,
        }
    }
}
export function selectMovie(movie) {
    return {
        type: SELECTE_MOVIE,
        payload: {
            movie,
        }
    }
}
