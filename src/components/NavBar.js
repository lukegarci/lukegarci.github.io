import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import homeIcon from '../assets/home.png';
import projectsIcon from '../assets/project.png';
import aboutIcon from '../assets/about.png';
import contactIcon from '../assets/contact.png';

function NavBar() {
    return (
        <div className="nav-container">
            <div className="navbar">
                <Link to='/' className="nav-link">
                    <img src={homeIcon} alt="Home" className="nav-icon" />
                    <span className="nav-text">Home</span>
                </Link>
                <Link to='/Projects' className="nav-link">
                    <img src={projectsIcon} alt="Projects" className="nav-icon" />
                    <span className="nav-text">Projects</span>
                </Link>
                <Link to='/About' className="nav-link">
                    <img src={aboutIcon} alt="About" className="nav-icon" />
                    <span className="nav-text">About</span>
                </Link>
                <Link to='/Contact' className="nav-link">
                    <img src={contactIcon} alt="Contact" className="nav-icon" />
                    <span className="nav-text">Contact</span>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
