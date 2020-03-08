import React from "react";

function FeedInfo({ feedTitle, feedLink, feedImg, feedDesc }) {
   const checkFeed = feedTitle !== "" ? feedTitle : "TEST";
   return (
      <div>
         <h1>{checkFeed}</h1>
         <a href={feedLink}>
            <img alt="News link" src={feedImg}></img>
         </a>
         <p>{feedDesc}</p>
      </div>
   );
}

export default FeedInfo;
