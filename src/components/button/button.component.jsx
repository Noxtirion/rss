import React from "react";

import "./button.styles.scss";

function Button(props) {
   return <button className="button">{props.text}</button>;
}

export default Button;
