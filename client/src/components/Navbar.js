import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
            Focus Fitness
            </a>
            <div className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={"/"} className="nav-link">
                Exercises
                </Link>
            </li>
            <li className="nav-item" >
                <Link to={"/create"} className="nav-link">
                Create Exercise
                </Link>
            </li>
            <li className="nav-item" >
                <Link to={"/user"} className="nav-link">
                Create User
                </Link>
            </li>
            </div>
        </nav>
        )
    }
}
