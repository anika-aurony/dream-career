import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Dream Job</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJob">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button>Start Applying</button>
        </div>

    );
};

export default Header;