import React from 'react';

const Header = () => {
    const nl = { textDecoration: 'none' }
    return (
        <div>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li className="divider"></li>
                <li><a href="#">three</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper #82b1ff blue accent-1">
                    <a style={nl} href="#" className="brand-logo center"><i class="material-icons large">book</i></a>
                    <ul className="right hide-on-med-and-down">
                    <li><a style={nl} href="#">Sass</a></li>
                    <li><a style={nl} href="#">Components</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;