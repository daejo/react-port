import React, { useState } from 'react';
import './App.css';
import djIcon from './assets/img/dj-icon.svg'
import Nav from './components/Nav';
import Header from './components/Header'
import Page from './components/Pages';

function App() {

  const [pages] = useState([
    { name: 'about', description: 'An in depth look at David Joaquin.'},
    { name: 'portfolio', description: 'Collection of previous apps worked on.' },
    { name: 'resume', description: 'A page where you can download my resume and see my developer proficiency.' },
    { name: 'contact', description: 'Send a message directly to me.'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
      <>
          <Header>  
                <img src={djIcon} style={{ width: "7% "}} alt="dj insignia" />   
              <Nav
                  pages={pages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  contactSelected={contactSelected}
                  setContactSelected={setContactSelected}>
              </Nav>
          </Header>
          <main>
                <Page currentPage={currentPage} />
          </main>
      </>
  );
}

export default App;
