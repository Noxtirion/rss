import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CollectionPage({ name, url }) {
   return (
      <div className="collectionPage">
         <h3>{name} </h3>
         <h3>{url}</h3>
         <Link to={`/feed/${name}`}>
            <Button text="Open" />
         </Link>
         <Button text="Delete" />
      </div>
   );
}

export default CollectionPage;
