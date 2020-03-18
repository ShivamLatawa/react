import React from "react";
import {Link} from "react-router-dom";

export default class MovieCard extends React.Component {

    constructor(props) {
        super(props)
    }

    handleOnClick() {
        this.props.onAddToFavoritesClick(this.props.movie);
    }
    handleSelectedMovie() {
        this.props.onSelectMovieClick(this.props.movie);
    }

    renderAddToFavorites() {
        let addedFavoriteMovies;
        const {movie} = this.props;

        if (movie.Type === "movie") {
            addedFavoriteMovies = this.props.addedFavorites.movie;
        } else {
            addedFavoriteMovies = this.props.addedFavorites.series;
        }
        const favorite = addedFavoriteMovies
            .filter((addedFavoriteId) => addedFavoriteId === movie.imdbID);

        if (favorite.length) {
            return (
                <div className="add-to-favorites">
                    <span className="marked-favorites-text btn btn-default">Marked as Favorite</span>
                </div>
            );
        }
        return (
            <div className="add-to-favorites">
                <span className="add-to-favorites-text btn btn-default"
                      onClick={this.handleOnClick.bind(this)}>Add to Favorites</span>
            </div>
        );
    }

    render() {
        const {movie, customStyle} = this.props;
        return (
            <div className={customStyle ? "customStyle movie-card" : "col-md-11 movie-card"}>
                <div className="card mb-4 box-shadow">
                    <div className="poster-container">
                        <img className="card-img-top movie-poster"
                             alt=""
                             src={movie.Poster}
                        />
                        {this.renderAddToFavorites()}
                    </div>
                    <div className="card-body">
                        <div className="card-text-title"><Link onClick={this.handleSelectedMovie.bind(this)} to={{pathname: `/detail/${movie.imdbID}`}}>{movie.Title}</Link></div>
                        <div className="card-text">{movie.Year}</div>
                        <div className="card-text-type">{movie.Type}</div>
                    </div>
                </div>
            </div>
        )
    }
}

