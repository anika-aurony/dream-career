import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='header'>
            <h3>Dream Career</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJob">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <Button variant="primary">Start Applying</Button>
            
        </div>

    );
};

export default Header;