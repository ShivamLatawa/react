import React from "react";
import {Link} from "react-router-dom";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container d-flex justify-content-center">
                    <a className="navbar-brand" href="#">ThoughtWorks©</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
