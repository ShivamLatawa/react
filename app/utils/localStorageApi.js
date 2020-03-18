// Not being used currently, can be used some day if redux's localstorage dies!

export const loadStateFromStorage = () => {
    try {
        const serializedState = localStorage.getItem("favoriteMovies");
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveStateToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("favoriteMovies", serializedState);
    } catch (err) {

    }
};