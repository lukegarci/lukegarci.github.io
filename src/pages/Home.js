import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title typing-animation">
                Hi I'm Luke Garci, software engineer.
            </h1>
            <p className="home-subtitle">
                Computer Science & Finance, 2026 at Oregon State University
            </p>
            <div className="home-buttons">
                {}
                <a 
                    href="/resume.pdf"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                >
                    Resume
                </a>
                {}
                <a href="/Contact" className="btn">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Home;
