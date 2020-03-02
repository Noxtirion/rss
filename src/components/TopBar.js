import React from "react";
import { Link } from "react-router-dom";

function TopBar(props) {
   return (
      <header className="header">
         <div className="header__wrapper">
            <h3>RSS App</h3>
            <nav>
               <Link to="/">Home</Link>
            </nav>
         </div>
      </header>
   );
}

export default TopBar;
