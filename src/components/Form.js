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
   const [feedData, useFeedData] = useState(null);
   const [ref, inView, entry] = useInView({
      threshold: 0,
      rootMargin: "-100px"
   });

   const checkView = entry !== undefined && !entry.isIntersecting;
   const emptyField = "Complete the fields";

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
      useFeedData(prevFeedData =>
         prevFeedData !== null ? [...prevFeedData, inputData] : [inputData]
      );
   };

   const FeedEmpty = () => {
      useFeedData([]);
   };

   const HandleSubmit = e => {
      e.preventDefault();

      const handleError = Validation(inputData, feedData, emptyField);

      if (handleError && handleError !== emptyField) {
         setError(handleError);
         return;
      } else if (handleError === emptyField) {
         setError(handleError);
         FeedEmpty();
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
      const getData = localStorage.getItem("feeds") || null;
      useFeedData(JSON.parse(getData));
   };

   useEffect(() => {
      GetFeedData();
   }, []);

   useEffect(() => {
      localStorage.setItem("feeds", JSON.stringify(feedData));
   });

   const addCollection =
      feedData !== null &&
      feedData.map((item, k) => (
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
               placeholder=" Add name (3-12 characters)"
               onChange={HandleChange}
            />
            <label>URL:</label>
            <input
               type="url"
               value={inputData.url}
               name="url"
               placeholder=" Add URL"
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
