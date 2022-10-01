
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Focus Fitness
                </a>
                <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/exercises"} className="nav-link">
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
        </>
    )
}

export default Navbar;