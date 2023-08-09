import React, { useState } from "react";
import "./HeaderStyle.css";
import { UilBars } from '@iconscout/react-unicons';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">cMc</div>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link " onClick={() => showMenu(!Toggle)} >
                <i className="uil uil-estate nav_icon" ></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link active-link" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-file-alt nav_icon"></i>
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link active-link" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-traffic-barrier nav_icon"></i>
                Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link active-link" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
            <li className="nav_item">
              <a href="#footer" className="nav_link active-link" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-message nav_icon"></i>
                Acerca de
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close "
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <UilBars/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
