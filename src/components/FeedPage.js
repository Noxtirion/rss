import React, { useState, useEffect } from "react";
import FeedInfo from "./FeedInfo";
import { useParams } from "react-router-dom";

function FeedPage() {
   const [feedTitle, setFeedTitle] = useState();
   const [feedDesc, setFeedDesc] = useState();
   const [feedImg, setFeedImg] = useState();
   const [feedLink, setFeedLink] = useState();

   const { nameId } = useParams();
   const getFeed = JSON.parse(localStorage.getItem("feeds"));

   const feed = getFeed.find(item => item.name === nameId);

   // localStorage.setItem("openFeed", JSON.stringify(feed));

   // console.log(getFeed);
   // console.log(feedStore);

   useEffect(() => {
      let url = `https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`;
      // console.log(feed.url);
      fetch(url)
         .then(res => res.json())
         .then(res => {
            // console.log(res.items);
            setFeedTitle(res.items[1].title);
            setFeedDesc(res.items[1].description);
            setFeedImg(res.items[1].enclosure.link);
            setFeedLink(res.items[1].link);
            // console.log(res.items[1].enclosure.link);
         });
   });

   return (
      <>
         <FeedInfo
            feedTitle={feedTitle}
            feedDesc={feedDesc}
            feedImg={feedImg}
            feedLink={feedLink}
         />
      </>
   );
}

export default FeedPage;
