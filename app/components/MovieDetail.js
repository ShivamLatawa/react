import React from 'react';
import {connect} from "react-redux";

export const mapStateToProps = (state) => {
    return {
        movie: state.favoritesPage.data.selectedMovie,
    }
};

class MovieD extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const movie = this.props.movie;
        return (
            <section className="jumbotron" style={{background:'#000!important'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="jumbotron-heading">{movie.Title}</h1>
                            <p className="lead">
                                {movie.Plot}
                            </p>
                            <div className="row">
                                <div className="col">
                                    Actors: {movie.Actors}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    Released: {movie.Released}
                                </div>
                                <div className="col">
                                    Rating: {movie.imdbRating}
                                </div>
                                <div className="col">
                                    Box office: {movie.BoxOffice}
                                </div>
                                <div className="col">
                                    Votes: {movie.imdbVotes}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={movie.Poster} alt={movie.Title}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(MovieD);
