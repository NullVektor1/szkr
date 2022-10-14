import React from "react";
import { Link } from 'react-router-dom';


const Navigation = ({menus}) => {
  return (
    <nav>
      <ul>
        {
          menus.map((menu) => {
            return <li>
              <Link to={menu.url}>{menu.title}</Link>
            </li>
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;