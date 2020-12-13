import React from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
        contactSelected,
        setContactSelected
      } = props;
    
    return (
        
        <nav>
            <ul className="nav_links">
                <li>
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>
                    Contact
                    </span>
                </li>
                {pages.map((page) => (
                    <li className={`mx-1 ${
                        currentPage.name === page.name && !contactSelected && `navActive`}`} key={page.name}>
                    <span onClick={() => {
                        setCurrentPage(page);
                        setContactSelected(false);}}>                            
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;