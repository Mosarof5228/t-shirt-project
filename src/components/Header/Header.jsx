import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='text-center mt-2 bg-gray-50 py-4'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contract'>Contract</Link>
            <Link to='/myself'>MySelf</Link>
        </nav>
    );
};

export default Header;