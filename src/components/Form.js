import React, { useState, useEffect } from "react";
import Button from "./Button";
import CollectionPage from "./CollectionPage";
import Validation from "./Validation";
import ErrorMsg from "./ErrorMsg";
import ButtonUp from "./ButtonUp";
import { useInView } from "react-intersection-observer";

function Form() {
   const [inputData, useInputData] = useState({ name: "", url: "" });
   const [error, setError] = useState(null);
   const [feedData, useFeedData] = useState([]);
   const [ref, inView, entry] = useInView({
      threshold: 0,
      rootMargin: "-100px"
   });

   const checkView = entry !== undefined && !entry.isIntersecting;
   // console.log(entry);
   const HandleChange = e => {
      const { name, value } = e.target;
      useInputData(prevInputData => {
         return {
            ...prevInputData,
            [name]: value
         };
      });
   };

   const FeedUpdate = () => {
      useFeedData(prevFeedData => [...prevFeedData, inputData]);
   };

   const HandleSubmit = e => {
      e.preventDefault();
      const handleError = Validation(inputData, feedData);

      if (handleError) {
         setError(handleError);
         return;
      } else {
         setError(null);
         FeedUpdate();
      }
   };

   const RemoveFeed = x => {
      const index = feedData.indexOf(x);
      useFeedData(prevFeedData => prevFeedData.filter(value => value !== prevFeedData[index]));
      localStorage.setItem("feeds", JSON.stringify(feedData));
   };

   const GetFeedData = () => {
      const feedData = localStorage.getItem("feeds");

      useFeedData(JSON.parse(feedData));
   };

   useEffect(() => {
      GetFeedData();
   }, []);

   useEffect(() => {
      localStorage.setItem("feeds", JSON.stringify(feedData));
   });

   const addCollection = feedData.map((item, k) => (
      <CollectionPage key={k} name={item.name} url={item.url} remove={RemoveFeed} index={item} />
   ));

   return (
      <>
         <form className="form" onSubmit={HandleSubmit} ref={ref}>
            <label>Name:</label>
            <input
               type="text"
               value={inputData.name}
               name="name"
               placeholder=" Add name..."
               onChange={HandleChange}
            />
            <label>URL:</label>
            <input
               type="url"
               value={inputData.url}
               name="url"
               placeholder=" Add URL..."
               onChange={HandleChange}
            />
            {error && <ErrorMsg msg={error} />}
            <Button text="Add" />
         </form>
         {addCollection}
         <ButtonUp appear={checkView ? "appear" : ""} />
      </>
   );
}

export default Form;
