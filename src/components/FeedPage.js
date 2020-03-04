import React from "react";
import { useParams } from "react-router-dom";

function FeedPage({ feedStore }) {
   const { nameId } = useParams();

   console.log(feedStore);
   const thisNameId = feedStore.find(item => item.name === nameId);
   // const thisNameIda = feedStore.map(item => item.name);

   console.log(thisNameId);

   return <h1>{thisNameId.name}</h1>;
}

export default FeedPage;
