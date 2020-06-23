import React, { useState, useEffect } from "react";
import FeedInfo from "../../components/feed-info/feed-info.component";
import ButtonUp from "../../components/button-up/button-up.component";
import Spinner from "../../components/spinner/spinner.component";

import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import "./feed-page.styles.scss";

let Parser = require("rss-parser");
let parser = new Parser();

function FeedPage() {
   const [allFeed, setAllFeed] = useState([
      {
         feedTitle: "",
         feedDesc: "",
         feedImg: "",
         feedLink: "",
         feedDate: ""
      }
   ]);
   const [feedMainTitle, setFeedMainTitle] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [ref, inView, entry] = useInView({
      threshold: 0,
      rootMargin: "-100px"
   });

   const check = entry !== undefined && !entry.isIntersecting;
   const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
   const { nameId } = useParams();

   useEffect(() => {
      let cancel = false;
      (async () => {
         const getFeed = JSON.parse(localStorage.getItem("feeds"));
         if (cancel) {
            return;
         }
         const feed = getFeed.find(item => item.name === nameId);
         if (cancel) {
            return;
         }
         try {
            await parser.parseURL(CORS_PROXY + feed.url, (err, resFeed) => {
               if (err) throw console.log(`${err} (Fetch problem)`);
               if (cancel) {
                  return;
               }

               setFeedMainTitle(resFeed.title);
               resFeed.items.forEach(entry => {
                  setAllFeed(prevAllFeed => {
                     return [
                        ...prevAllFeed,
                        {
                           feedTitle: entry.title !== undefined ? entry.title : "",
                           feedDesc: entry.contentSnippet !== undefined ? entry.contentSnippet : "",
                           feedImg: entry.enclosure !== undefined ? entry.enclosure.url : "",
                           feedLink: entry.link !== undefined ? entry.link : "",
                           feedDate: entry.pubDate !== undefined ? entry.pubDate : ""
                        }
                     ];
                  });
               });
               setIsLoading(true);
            });
         } catch (err) {
            console.log(`${err} Something went wrong...`);
         }
      })();
      return () => {
         cancel = true;
      };
   }, [nameId]);

   const feedInfoCollection = allFeed.map((element, k) => (
      <FeedInfo
         key={k}
         feedTitle={element.feedTitle}
         feedDesc={element.feedDesc}
         feedImg={element.feedImg}
         feedLink={element.feedLink}
         feedDate={element.feedDate}
      />
   ));

   return (
      <>
         {isLoading ? (
            <div className="feedPage">
               <h1 className="feedPage__mainTitle" ref={ref}>
                  <img src={require("../../assets/newspaper.svg")} alt="Newspaper icon" />
                  {feedMainTitle}
               </h1>
               {feedInfoCollection}
            </div>
         ) : (
            <Spinner />
         )}
         <ButtonUp appear={check ? "appear" : ""} />
      </>
   );
}

export default FeedPage;
