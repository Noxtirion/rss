import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CollectionPage(props) {
   return (
      <div className="collectionPage">
         <h3>{props.name} </h3>
         <h3>{props.url}</h3>
         <Link to="/">
            <Button text="Open" />
         </Link>
         <Button text="Delete" />
      </div>
   );
}

export default CollectionPage;
