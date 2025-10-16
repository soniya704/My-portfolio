import React from 'react';
import './Navbar.css';
import { Toggle } from '../Toggle/Toggle';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <div className="nav-name">Andrew</div>
                <Toggle />
            </div>
            <div className="navbar-right">
                <div className="nav-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} to='Navbar' activeClass='activeclass' smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>

                    </ul>
                </div>
                <button className='button nav-button'>Contact</button>
            </div>


        </div>
    )
}
