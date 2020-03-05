import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FeedPage({ feedStore }) {
   const [feedTitle, setFeedTitle] = useState();
   const [feedDesc, setFeedDesc] = useState();

   const { nameId } = useParams();

   const [feed] = feedStore;
   const thisNameId = feedStore.find(item => item.name === nameId);

   useEffect(() => {
      let url = `https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`;
      fetch(url)
         .then(res => res.json())
         .then(res => {
            console.log(res.items);

            // childNodes[1].nodeValue
         });
   });

   // const thisNameIda = feedStore.map(item => item.name);

   // console.log(thisNameId);

   return (
      <>
         <h1>{feedTitle}</h1>
         <p>{feedDesc}</p>
      </>
   );
}

export default FeedPage;
