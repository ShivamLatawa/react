export const fetchMovies = (whatToFetch) => {
    return window.fetch(`https://thoughtworksreactreduxmovies.firebaseio.com/${whatToFetch}.json`)
        .then((res) => res.json())
        .catch(console.log)
};