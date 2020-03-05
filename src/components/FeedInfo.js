import React from "react";

function FeedInfo({ feedTitle, feedLink, feedImg, feedDesc }) {
   return (
      <div>
         <h1>{feedTitle}</h1>
         <a href={feedLink}>
            <img alt="News link" src={feedImg}></img>
         </a>
         <p>{feedDesc}</p>
      </div>
   );
}

export default FeedInfo;
