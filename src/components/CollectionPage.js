import React from "react";
import Button from "./Button";

function CollectionPage(props) {
   return (
      <div className="collectionPage">
         <h3>Name </h3>
         <h3>URL</h3>
         <Button text="Open" />
         <Button text="Delete" />
      </div>
   );
}

export default CollectionPage;
