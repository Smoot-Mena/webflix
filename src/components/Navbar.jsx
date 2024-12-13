import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <section id='navigation'>
            <Link to="/"><img id='webflix-logo' src="../assets/webflix logo.png" alt="Webflix Logo" /></Link>
            <Link to="/my-favorites/">MY FAVORITES</Link>
            <Link to="/search/">SEARCH MOVIES</Link>
            </section>
    )
}

export default Navbar;