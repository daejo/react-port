import React, { useState } from 'react';
import './App.css';
import djIcon from './assets/img/dj-icon.svg'
import Nav from './components/Nav';
import Header from './components/Header'
import Page from './components/Pages';
import Footer from './components/Footer';

function App() {

  const [pages] = useState([
    { name: 'about', description: 'An in depth look at David Joaquin.'},
    { name: 'portfolio', description: 'Collection of previous apps worked on.' },
    { name: 'resume', description: 'A page where you can download my resume and see my developer proficiency.' },
    { name: 'contact', description: 'Send a message directly to me.'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <>
          <Header>  
                <img src={djIcon} id="dj-icon" alt="dj insignia" />   
              <Nav
                  pages={pages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}>
              </Nav>
          </Header>
          <main>
                <Page currentPage={currentPage} />
          </main>
          <Footer />
      </>
  );
}

export default App;
