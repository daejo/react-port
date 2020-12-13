import React, { useState } from 'react';
import Nav from '../Nav';
import djIcon from '../../assets/img/dj-icon.svg'

function Header() {
    const [pages] = useState([
        { name: 'about', description: 'An in depth look at David Joaquin.'},
        { name: 'portfolio', description: 'Collection of previous apps worked on.' },
        { name: 'resume', description: 'A page where you can download my resume and see my developer proficiency.' },
        { name: 'contact', description: 'Send a message directly to me.'}
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <header>
                <img src={djIcon} style={{ width: "7% "}} alt="dj insignia" />   
            <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}>
            </Nav>
        </header>
    );
}

export default Header;