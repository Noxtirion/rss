import React, { useState } from "react";
import Button from "./Button";
import CollectionPage from "./CollectionPage";

function Form(props) {
   const [inputData, useInputData] = useState({ name: "", url: "" });
   const [feedData, useFeedData] = useState([]);

   const HandleChange = e => {
      const { name, value } = e.target;
      useInputData(prevInputData => {
         return {
            ...prevInputData,
            [name]: value
         };
      });
   };

   const HandleSubmit = e => {
      e.preventDefault();
      useFeedData(prevFeedData => [...prevFeedData, inputData]);
      console.log(feedData[0]);
   };

   const addCollection = feedData.map(item => (
      <CollectionPage key={item.name} name={item.name} url={item.url} />
   ));

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
               type="text"
               value={inputData.url}
               name="url"
               placeholder="Add URL..."
               onChange={HandleChange}
            />
            <Button text="Add" />
         </form>
         {addCollection}
      </>
   );
}

export default Form;
