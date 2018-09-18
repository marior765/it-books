import React from 'react';
import Logo from '../Assets/Logo';

const Footer = () => {
    const nl = { textDecoration: 'none' }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #82b1ff blue accent-1">
                    <a style={nl} href="/" className="brand-logo"><Logo /></a>
                </div>
            </nav>
        </div>
    )
}

export default Footer;