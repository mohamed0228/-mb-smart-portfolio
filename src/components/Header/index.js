import React, { useState } from 'react';
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    
      <div style={{backgroundColor:"blue"}}>
        <div className='head'>
      <nav className="nav-link ">
        <div className="text-light" style={{paddinTop:"10px"}}>
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mohamed0228?tab=repositories"
          >
            <span className="nav-title-font">Mohammed Boussaada</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </div>
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;