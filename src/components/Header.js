import logo from '../assets/lg-icon.jpg';
import '../styles/Header.css';
import NavBar from './NavBar';
import linkedinLogo from '../assets/linkedin.png';  
import githubLogo from '../assets/github.png'; 

function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} alt='Logo' className='logo'/>
                <span className='logo-text'>Luke G.</span>
            </div>
            <NavBar/>
            <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/lukegarci" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                </a>
                <a 
                  href="https://github.com/lukegarci" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <img src={githubLogo} alt="GitHub" className="social-icon" />
                </a>
            </div>
        </div>
    );
}

export default Header;
