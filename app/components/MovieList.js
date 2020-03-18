import React from "react";
import Slider from "react-slick";
import MovieCard from "../containers/movieCard";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderList() {
        if (this.props.data.length < 3) {
            return this.props.data.map((movie, index) => ( <MovieCard key={index} movie={movie} customStyle/>))
        }

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
        };
        return (
            <Slider {...settings}>
                {this.props.data.map((movie, index) => ( <div key={index}><MovieCard movie={movie}/></div> ))}
            </Slider>
        );
    }

    renderSamuelJackson() {
        return (
            <div className="col-md-12 samuel-jackson">
                <div className="text-center">
                    <img className="mb-4" src="https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png" alt=""/>
                    <img src="https://i.imgur.com/Wo3YF30.png" alt=""/>
                </div>
            </div>
        )
    }

    renderMoviesList() {
        if(this.props.data){
            return this.props.data.length ? this.renderList() : this.renderSamuelJackson()
        }
    }

    renderLoadMoreButton() {
        return (
            <div className="text-center load-more">
                <button type="button" className="btn btn-primary">
                    Load More
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className="album py-5 movie-list">
                <div className="container">
                    {this.renderMoviesList()}
                </div>
            </div>
        )
    }
}
