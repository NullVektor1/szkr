import React from "react";
import './Header.css';
import Navigation from "./Navigation";
import menus from './menus.json';


const Header =  () => {

  return (
    <header className="header">
      <Navigation menus={Object.values(menus)}/>
    </header>
  );
}

export default Header;