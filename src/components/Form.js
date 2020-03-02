import React, { useState } from "react";

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
      <form>
         <input
            type="text"
            value={inputData.name}
            name="name"
            placeholder="Add name..."
            onChange={HandleChange}
         />
         <input
            type="text"
            value={inputData.url}
            name="url"
            placeholder="Add url..."
            onChange={HandleChange}
         />
      </form>
   );
}

export default Form;
