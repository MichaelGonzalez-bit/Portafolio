import React from "react";
import "./FooterStyle.css";
import navIcon2 from "../../assets/img/nav-icon2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">My GitHub</h1>

        <div className="footer_social">
          <ul className="footer_list">
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/MichaelGonzalez-bit/Portafolio.git" target="_blank">
                  <img src={navIcon2} alt="Github" />
                </a>
              </div>
            </span>
          </ul>
        </div>
        <span className="footer_copy">&#169;Michael All Rigths Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
