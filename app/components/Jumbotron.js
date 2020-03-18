import React from 'react';

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
        this.props.startFetchingData("movies");
        this.props.startFetchingData("series");
	}

	render() {
		return (
			<section className="jumbotron with-bg">
				<div className="container">
					<h1 className="jumbotron-heading">{this.props.name}</h1>
					<p className="lead">
						Redux works especially well with libraries like React because it lets you describe UI as a function of state, and Redux emits state updates in response to actions.
					</p>
				</div>
			</section>
		)
	}
}
