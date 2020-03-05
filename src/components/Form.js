import React, { useState, useEffect } from "react";
import Button from "./Button";
import CollectionPage from "./CollectionPage";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import Validation from "./Validation";
import ErrorMsg from "./ErrorMsg";

function Form({ store }) {
   const [inputData, useInputData] = useState({ name: "", url: "" });
   const [error, setError] = useState(null);
   const [feedData, useFeedData] = useState([]);

   const HandleChange = e => {
      const { name, value } = e.target;
      // console.log(inputData);
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

      // console.log(feedData);
      // store.setFeedStore(feedData);
   };

   // console.log(error);
   const RemoveFeed = x => {
      const index = feedData.indexOf(x);
      useFeedData(prevFeedData => prevFeedData.filter(value => value !== prevFeedData[index]));
      // console.log(index);
   };

   useEffect(() => {
      store.setFeedStore(feedData);

      // console.log(toJS(store.feedStore));
   });

   const addCollection = feedData.map((item, k) => (
      <CollectionPage key={k} name={item.name} url={item.url} remove={RemoveFeed} index={item} />
   ));
   // console.log(inputData);
   return (
      <>
         <form className="form" onSubmit={HandleSubmit}>
            <label>Name:</label>
            <input
               type="text"
               value={inputData.name}
               name="name"
               placeholder="Add name..."
               onChange={HandleChange}
            />
            <label>URL:</label>
            <input
               type="url"
               value={inputData.url}
               name="url"
               placeholder="Add URL..."
               onChange={HandleChange}
            />
            {error && <ErrorMsg msg={error} />}
            <Button text="Add" />
         </form>
         {addCollection}
      </>
   );
}

export default observer(Form);
