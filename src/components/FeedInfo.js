import React from "react";

function FeedInfo({ feedTitle, feedLink, feedImg, feedDesc }) {
   const checkFeed = feedTitle !== "" ? "block" : "none";
   return (
      <div className="feedInfo__wrapper feedInfo__wrapper--clear" style={{ display: checkFeed }}>
         <h2>{feedTitle}</h2>
         <div className="feedInfo__desc">
            <a href={feedLink}>
               <img
                  alt="News link"
                  src={feedImg !== "" ? feedImg : require("../enter.svg")}
                  title="Move to original news page"
               ></img>
            </a>
         </div>
         <p>{feedDesc}</p>
      </div>
   );
}

export default FeedInfo;
