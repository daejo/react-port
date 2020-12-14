import React from 'react';
import Contact from '../Contact';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Pages ({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    }

    return (
        <div>
            {renderPage(currentPage)}
        </div>
    );
}

export default Pages;