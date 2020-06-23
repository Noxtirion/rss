import React from "react";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

import "./collection-page.styles.scss";

function CollectionPage({ index, name, url, remove }) {
   return (
      <div className="collectionPage">
         <h3>{name} </h3>
         <h3 className="collectionPage__url">{url}</h3>
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
