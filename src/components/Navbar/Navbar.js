import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="navbar">
                <div className="logo" style={{ fontFamily: 'cursive' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>M</Link>
                </div>
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'active' : ''}>
                    <li><Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600' }}>Home</Link></li>
                    <li><Link to='/movielist' style={{ textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600' }}>Movie Review</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
