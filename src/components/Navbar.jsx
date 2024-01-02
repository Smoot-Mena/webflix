import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <section id='navigation'>
            <Link to="/">Home</Link>
            <Link to="/my-favorites/">My Favorites</Link>
            <Link to="/search/">Search Movies</Link>
            </section>
    )
}

export default Navbar;