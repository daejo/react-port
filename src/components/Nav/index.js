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
                        <li className={`${currentPage.name === page.name && `navActive`}`} key={page.name}>
                        <span onClick={() => {
                            setCurrentPage(page);}}> {capitalizeFirstLetter(page.name)}                             
                        </span>
                        </li>
                    ))}
                </ul>
            </h1>
        </nav>
    );
}

export default Nav;