import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './NavSection.css';

const NavSection = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut();
    }
    const [display, setDisplay] = useState('flex');
    const togolbar = () => {
        if (window.innerWidth > 770) {
            setDisplay('flex');
        } else {
            if (display === 'flex') {
                setDisplay('none');
            } else {
                setDisplay('flex');
            }
        }
    }
    return (
        <div className="nav-section">
            <Container className="nav-container">
                <div className="logo">
                    <h2><Link to='/'>Tour hobe</Link></h2>
                </div>
                <div className="all-nav-links">
                    <i class="fas fa-bars togolbar" onClick={togolbar}></i>
                    <ul style={{ display: display }}>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/packages'>Tour Package</Link></li>

                        {user.email ? <>
                            <li><Link to="/my-bookings">My Bookings</Link></li>
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        </> :
                            <li><Link to="/login">Login</Link></li>}
                        <li><Link to='/admin'>Admin</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default NavSection;