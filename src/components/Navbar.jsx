import React from 'react';
import { Link } from 'react-router-dom';
import logo from  "../assets/webflix-logo.png"

function Navbar() {
    return (
        <section id='navigation'>
            <Link to="/"><img id='webflix-logo' src={logo} alt="Webflix Logo" /></Link>
            <Link to="/my-favorites/">MY FAVORITES</Link>
            <Link to="/search/">SEARCH MOVIES</Link>
            </section>
    )
}

export default Navbar;