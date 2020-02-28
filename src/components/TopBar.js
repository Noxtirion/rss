import React from "react";
import { Link } from "react-router-dom";

function TopBar(props) {
   return (
      <header className="header">
         <h3>RSS App</h3>
         <nav>
            <Link to="/">Home</Link>
         </nav>
      </header>
   );
}

export default TopBar;
