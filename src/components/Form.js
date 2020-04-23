import React, { useState, useEffect } from "react";
import Button from "./Button";
import CollectionPage from "./CollectionPage";
import validation from "./validation";
import ErrorMsg from "./ErrorMsg";
import ButtonUp from "./ButtonUp";
import { useInView } from "react-intersection-observer";

function Form() {
   const [inputData, setInputData] = useState({ name: "", url: "" });
   const [error, setError] = useState(null);
   const [feedData, setFeedData] = useState(null);
   const [ref, inView, entry] = useInView({
      threshold: 0,
      rootMargin: "-100px"
   });

   const checkView = entry !== undefined && !entry.isIntersecting;
   const emptyField = "Complete the fields";

   const handleChange = e => {
      const { name, value } = e.target;
      setInputData(prevInputData => {
         return {
            ...prevInputData,
            [name]: value
         };
      });
   };

   const feedUpdate = () => {
      setFeedData(prevFeedData =>
         prevFeedData !== null ? [...prevFeedData, inputData] : [inputData]
      );
   };

   const feedEmpty = () => {
      setFeedData([]);
   };

   const handleSubmit = e => {
      e.preventDefault();

      const handleError = validation(inputData, feedData, emptyField);

      if (handleError && handleError !== emptyField) {
         setError(handleError);
         return;
      } else if (handleError === emptyField) {
         setError(handleError);
         feedEmpty();
      } else {
         setError(null);
         feedUpdate();
      }
   };

   const removeFeed = x => {
      const index = feedData.indexOf(x);
      setFeedData(prevFeedData => prevFeedData.filter(value => value !== prevFeedData[index]));
      localStorage.setItem("feeds", JSON.stringify(feedData));
   };

   const getFeedData = () => {
      const getData = localStorage.getItem("feeds") || null;
      setFeedData(JSON.parse(getData));
   };

   useEffect(() => {
      getFeedData();
   }, []);

   useEffect(() => {
      localStorage.setItem("feeds", JSON.stringify(feedData));
   });

   const addCollection =
      feedData !== null &&
      feedData.map((item, k) => (
         <CollectionPage key={k} name={item.name} url={item.url} remove={removeFeed} index={item} />
      ));

   return (
      <>
         <form className="form" onSubmit={handleSubmit} ref={ref}>
            <label>Name:</label>
            <input
               type="text"
               value={inputData.name}
               name="name"
               placeholder=" Name (3-12 characters)"
               onChange={handleChange}
            />
            <label>URL:</label>
            <input
               type="url"
               value={inputData.url}
               name="url"
               placeholder=" URL"
               onChange={handleChange}
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
