import React from 'react';
import Logo from '../Assets/Logo';

const Header = () => {
    const nl = { textDecoration: 'none' }
    return (
        <div>
            <nav>
                <div className="nav-wrapper #82b1ff blue accent-1">
                    <a style={nl} href="/" className="brand-logo center"><Logo /></a>
                    <a href="/books">Books</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;