export const FETCH_MORE_MOVIES = "FETCH_MORE_MOVIES";
export const RECEIVE_MORE_MOVIES_DATA = "RECEIVE_MORE_MOVIES_DATA";

export function fetchMoreMovies() {
    return {
        type: FETCH_MORE_MOVIES,
        payload: {}
    }
}


export function receiveMoreMoviesData(data) {
    return {
        type: RECEIVE_MORE_MOVIES_DATA,
        payload: {data}
    }
}

