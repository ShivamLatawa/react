export const REQUEST_MOVIES_DATA = "REQUEST_MOVIES_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export function startFetchingContent(whatToFetch) {
    return {
        type: REQUEST_MOVIES_DATA,
        payload: {
            whatToFetch,
        }
    }
}

export function receiveData(whatToFetch, data) {
    return {
        type: RECEIVE_DATA,
        payload: {
            whatToFetch,
            data,
        }
    }
}
