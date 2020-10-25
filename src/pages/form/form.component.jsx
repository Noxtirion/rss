import React, { useState, useEffect } from "react";

import Button from "../../components/button/button.component";
import CollectionPage from "../../components/collection-page/collection-page.component";
import validation from "../../utils/validation";
import ErrorMsg from "../../components/error-message/error-message.component";
import ButtonUp from "../../components/button-up/button-up.component";

import { useInView } from "react-intersection-observer";

import "./form.styles.scss";

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
         <div className="example-url"><p>Example URLs:</p>   <p>https://www.nasa.gov/rss/dyn/onthestation_rss.rss</p><p>https://www.polsatnews.pl/rss/polska.xml</p><p>http://fakty.interia.pl/nauka/feed</p><p>http://www.tvn24.pl/polska.xml</p></div>
         {addCollection}
         <ButtonUp appear={checkView ? "appear" : ""} />
      </>
   );
}

export default Form;
