import React from "react";

function ErrorMsg({ msg }) {
   return (
      <div className="errorMsg">
         <p>{msg}</p>
      </div>
   );
}

export default ErrorMsg;
