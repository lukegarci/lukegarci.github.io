import { useState, useEffect } from 'react';
import '../styles/About.css';

function About() {
    const skillsData = {
        Languages: [
            { name: 'Python | 4 years', years: 4 },
            { name: 'C/C++ | 3 years', years: 3 },
            { name: 'Java | 1 year', years: 1 },
            { name: 'SQL | 2 years', years: 2 },
            { name: 'SystemVerilog | 1 year', years: 1 },
            { name: 'HTML/CSS/JS | 3 years', years: 3 },
        ],
        Frameworks: [
            { name: 'React | 2 years', years: 2 },
            { name: 'Spring Boot | 1 year', years: 1 },
            { name: 'Node.js | 1 year', years: 1 },
            { name: 'Django | 1 year', years: 1 },
        ],
        'Development Tools': [
            { name: 'Git | 4 years', years: 4 },
            { name: 'AWS | 1 year', years: 1 },
            { name: 'PostgreSQL | 2 years', years: 2 },
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState('Languages');
    const [displayedSkills, setDisplayedSkills] = useState(skillsData[selectedCategory]);
    const [fadeClass, setFadeClass] = useState('');

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;

        setFadeClass('fade-out'); // start fade out
        setTimeout(() => {
            setSelectedCategory(category);
            setDisplayedSkills(skillsData[category]);
            setFadeClass('fade-in'); // fade in new skills
        }, 300); // matches half of CSS transition for smoother effect
    };

    useEffect(() => {
        setFadeClass('fade-in'); // initial fade-in
    }, []);

    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
                I am a software engineer studying Computer Science and Finance at Oregon State University, graduating in 2026. I enjoy building software solutions that solve real-world problems, collaborating on projects, and continuously learning new technologies.
            </p>

            <div className="skills-buttons">
                {Object.keys(skillsData).map((category) => (
                    <button 
                        key={category} 
                        className={`skills-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={`skills-container ${fadeClass}`}>
                {displayedSkills.map((skill) => (
                    <div key={skill.name} className="skill">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar-background">
                            <div 
                                className="skill-bar-fill"
                                style={{ width: `${(skill.years / 5) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
