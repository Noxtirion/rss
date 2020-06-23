import React from "react";

import "./error-message.styles.scss";

function ErrorMsg({ msg }) {
   return (
      <div className="errorMsg">
         <p>{msg}</p>
      </div>
   );
}

export default ErrorMsg;
