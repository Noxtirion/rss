import React from "react";

import "./feed-info.styles.scss";

function FeedInfo({ feedTitle, feedLink, feedImg, feedDesc, feedDate }) {
   const checkFeed = feedTitle !== "" ? "block" : "none";
   return (
      <div className="feedInfo feedInfo__clear" style={{ display: checkFeed }}>
         <p>{feedDate}</p>
         <h2>{feedTitle}</h2>
         <div className="feedInfo__desc">
            <a href={feedLink}>
               <img
                  alt="News link"
                  src={feedImg !== "" ? feedImg : require("../../assets/enter.svg")}
                  title="Move to original news page"
               ></img>
            </a>
         </div>
         <p>{feedDesc}</p>
      </div>
   );
}

export default FeedInfo;
