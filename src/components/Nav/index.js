import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);}, [currentPage]);

    return (
        <nav>
            <h1>
                <ul>
                    {pages.map((page) => (
                        <li className={`${currentPage.name === page.name && `activePage`}`} key={page.name}>
                            <a href={`#${currentPage.name}`} onClick={() => {
                                setCurrentPage(page);}}>
                                {capitalizeFirstLetter(page.name)}                             
                            </a>    
                        </li>
                    ))}
                </ul>
            </h1>
        </nav>
    );
}

export default Nav;