import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import './navbar.css';

function Navbar() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <header className="navbar">
            <div className="navbar-brand">
                <Link to="/">Om Courses</Link>
            </div>
            <nav className="navbar-links">
                <Link to="/">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </button>
        </header>
    );
}

export default Navbar;