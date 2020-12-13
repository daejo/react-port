import React, { useEffect } from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
    
    useEffect(() => {
        document.title = currentPage.name;}, [currentPage]);
    
    pages.map((page) => (
        console.log(page.name)
    ))
        
    return (
        <nav>
            <ul>
                {pages.map((page) => (
                    <li className={`${currentPage.name === page.name && `navActive`}`} key={page.name}>
                    <span onClick={() => {
                        setCurrentPage(page);}}> {page.name}                             
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;