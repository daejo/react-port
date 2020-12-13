import React from 'react';
import Nav from '../Nav';
import djIcon from '../../assets/img/dj-icon.svg'

function Header(props) {
    return (
        <header>
            <img src={djIcon} style={{ width: "7% "}} alt="dj insignia" />
            <Nav />
        </header>
    );
}

export default Header;