import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CollectionPage({ index, name, url, remove }) {
   return (
      <div className="collectionPage">
         <h3>{name} </h3>
         <h3>{url}</h3>
         <Link to={`/${name}`}>
            <Button text="Open" />
         </Link>
         <button className="button" onClick={() => remove(index)}>
            Delete
         </button>
      </div>
   );
}

export default CollectionPage;
