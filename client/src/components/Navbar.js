import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import logo from '/Users/mary/Documents/ExtendClassFiles/Final Project/finalproject/client/src/assets/img/ff.png'

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout();
  };

  return (
    <header className={`header ${darkMode ? "header-dark" : "header-light"}`}>
      <div className="container">
        <Link to="/" >
          {/* <h1>Focused Fitness</h1> */}
          <img className= "img" alt="logo" src={logo}/>
        </Link>
        <nav className={`nav ${darkMode ? "nav-dark" : "nav-light"}`}>
          {user && (
            // if we have a user we see this
            <div className={`div ${darkMode ? "div-dark" : "div-light"}`}>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            //if we don't have a user we see this
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar
