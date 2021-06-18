import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <h1>Gatsby Web App</h1>
            <div className="link">
                <Link to='/'>Home</Link> {" "}
                <Link to='/about'>About</Link> {" "}
                <Link to='/project'>Project</Link> {" "}
            </div>
        </nav>
    )
}

export default Navbar
