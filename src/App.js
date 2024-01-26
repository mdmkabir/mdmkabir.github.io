import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  const [activeComponent, setActiveComponent] = useState("about");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "publications":
        return <Publications />;
      case "contact":
        return <Contact />;
      case "blog":
        return <Blog />;
      default:
        return null;
    }
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <main className="App">
      <Sidebar />

      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className={`navbar-link ${activeComponent === "about" ? "active" : ""}`} onClick={() => handleButtonClick("about")}>
                About
              </button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${activeComponent === "resume" ? "active" : ""}`} onClick={() => handleButtonClick("resume")}>
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${activeComponent === "publications" ? "active" : ""}`} onClick={() => handleButtonClick("publications")}>
                Publications
              </button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${activeComponent === "blog" ? "active" : ""}`} onClick={() => handleButtonClick("blog")}>
                Blogs
              </button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${activeComponent === "contact" ? "active" : ""}`} onClick={() => handleButtonClick("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <article className="active" data-page={activeComponent}>
          {renderActiveComponent()}
        </article>
      </div>
    </main>
  );
}

export default App;
