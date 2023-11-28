import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Support from './components/Support';
import Partners from './components/Partners';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import NavBarSide from './components/NavBarSide';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Services':
        return <Services />;
      case 'Support':
        return <Support />;
      case 'Partners':
        return <Partners />;
      case 'ContactUs':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };


  return (
    <div className="App">
      <Header />
      <NavBarSide onNavClick={setCurrentPage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
