import React, { useState, useEffect } from "react";
import FeedInfo from "./FeedInfo";
import { useParams } from "react-router-dom";
let Parser = require("rss-parser");
let parser = new Parser();
// const controller = new AbortController();
// const signal = controller.signal;

function FeedPage() {
   const [allFeed, setAllFeed] = useState([
      {
         feedTitle: "",
         feedDesc: "",
         feedImg: "",
         feedLink: ""
      }
   ]);

   const [feedMainTitle, setFeedMainTitle] = useState("");

   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
   const { nameId } = useParams();

   const getFeed = JSON.parse(localStorage.getItem("feeds"));
   const feed = getFeed.find(item => item.name === nameId);

   //useHistory uzyc do obslugi bledu po usunieciu feeda i cofnieciu strony??

   useEffect(() => {
      let cancel = false;
      (async () => {
         await parser.parseURL(CORS_PROXY + feed.url, (err, resFeed) => {
            if (err) throw err;
            if (cancel) {
               return;
            }
            console.log(resFeed.title !== undefined ? resFeed.title : "");
            setFeedMainTitle(resFeed.title);
            resFeed.items.forEach(entry => {
               setAllFeed(prevAllFeed => {
                  return [
                     ...prevAllFeed,
                     {
                        feedTitle: entry.title !== undefined ? entry.title : "",
                        feedDesc: entry.contentSnippet !== undefined ? entry.contentSnippet : "",
                        feedImg: entry.enclosure !== undefined ? entry.enclosure.url : "",
                        feedLink: entry.link !== undefined ? entry.link : ""
                     }
                  ];
               });
               // console.log(entry);
            });
         });
      })();
      return () => {
         cancel = true;
      };
   }, [feed.url]);
   console.log(allFeed);

   const feedInfoCollection = allFeed.map((element, k) => (
      <FeedInfo
         key={k}
         feedTitle={element.feedTitle}
         feedDesc={element.feedDesc}
         feedImg={element.feedImg}
         feedLink={element.feedLink}
      />
   ));

   return (
      <>
         <div className="feedInfo">
            <h1 className="feedInfo__mainTitle">
               <img src={require("../newspaper.svg")} alt="Newspaper icon" />
               {feedMainTitle}
            </h1>

            {feedInfoCollection}
         </div>
      </>
   );
}

export default FeedPage;
