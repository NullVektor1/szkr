import React from "react";
import './Footer.css';
import Navigation from "./Navigation";
import menus from "./menus.json";


const Footer =  () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Navigation</h3>
        <hr width="100%"/>
        <Navigation menus={Object.values(menus)}/>
      </div>

      <div className="footer__container">
        Another section
      </div>

      <div className="footer__container">
        Third section
      </div>
    </footer>
  );
}

export default Footer;