import React from 'react'

const About = () => (
    <div>
        <h2>About</h2>
        <p>What's up? This is a simple app to discover new movies to watch.</p>
        <h3>Author</h3>
        <p>Cyro Dubeux</p>
        <h3>Source</h3>
        <p>
            <a
                href="https://github.com/cyruzin/movie_discovery"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
                </a>
        </p>
        <h3>Technologies</h3>
        <ul>
            <li>Ant Design</li>
            <li>Axios</li>
            <li>Lodash</li>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Redux Thunk</li>
        </ul>
        <h3>API</h3>
        <p>
            This product uses the TMDb API but is not endorsed or certified by TMDb.
    </p>
    </div>
)

export default About