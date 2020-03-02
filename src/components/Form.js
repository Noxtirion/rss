import React, { useState } from "react";
import Button from "./Button";

function Form() {
   const [inputData, useInputData] = useState({ name: "", url: "" });

   const HandleChange = e => {
      const { name, value } = e.target;
      useInputData(prevInputData => {
         return {
            ...prevInputData,
            [name]: value
         };
      });
   };

   return (
      <form className="form">
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
   );
}

export default Form;
