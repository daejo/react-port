import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';

function Page ({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'portfolio':
                return <Portfolio />;
            case 'resume':
                return <Resume />;
            case 'contact':
                return <Contact />;
            default:
                return <About />;
        }
    }

    return (
                <div className="container">
                    {renderPage(currentPage)}
                </div>
    );
}

export default Page;