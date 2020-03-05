import React, { useState, useEffect } from "react";
import FeedInfo from "./FeedInfo";
// import { useParams } from "react-router-dom";

function FeedPage({ feedStore }) {
   const [feedTitle, setFeedTitle] = useState();
   const [feedDesc, setFeedDesc] = useState();
   const [feedImg, setFeedImg] = useState();
   const [feedLink, setFeedLink] = useState();

   // const { nameId } = useParams();

   const [feed] = feedStore;
   // const thisNameId = feedStore.find(item => item.name === nameId);

   useEffect(() => {
      let url = `https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`;
      fetch(url)
         .then(res => res.json())
         .then(res => {
            console.log(res.items);
            setFeedTitle(res.items[1].title);
            setFeedDesc(res.items[1].description);
            setFeedImg(res.items[1].enclosure.link);
            setFeedLink(res.items[1].link);
            console.log(res.items[1].enclosure.link);
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
