import React, { useState, useEffect } from "react";
import Button from "./Button";
import CollectionPage from "./CollectionPage";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useForm } from "react-hook-form";

function Form({ store }) {
   const [inputData, useInputData] = useState({ name: "", url: "" });
   const [feedData, useFeedData] = useState([]);
   const { handleSubmit, register, errors } = useForm();

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
      // e.preventDefault();
      useFeedData(prevFeedData => [...prevFeedData, inputData]);

      // store.setFeedStore(feedData);
   };

   useEffect(() => {
      store.setFeedStore(feedData);
      console.log(toJS(store.feedStore));
   });

   const addCollection = feedData.map((item, k) => (
      <CollectionPage key={k} name={item.name} url={item.url} />
   ));

   return (
      <>
         <form className="form" onSubmit={handleSubmit(HandleSubmit)}>
            <label>Name:</label>
            <input
               type="text"
               value={inputData.name}
               name="name"
               ref={register({
                  required: true,
                  maxLength: {
                     value: 15,
                     message: "Max 15 characters..."
                  }
               })}
               placeholder="Add name..."
               onChange={HandleChange}
            />
            <h3>{errors.name && errors.name.message}</h3>
            <label>URL:</label>
            <input
               type="url"
               value={inputData.url}
               name="url"
               ref={register({
                  required: true,
                  pattern: {
                     value: /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
                     message: "Invalid url address"
                  }
               })}
               placeholder="Add URL..."
               onChange={HandleChange}
            />
            <h3>{errors.url && errors.url.message}</h3>
            <Button text="Add" />
         </form>
         {addCollection}
      </>
   );
}

export default observer(Form);
