import React from "react";
let Scroll = require("react-scroll");
let scroll = Scroll.animateScroll;

function ButtonUp(props) {
   return (
      <div className={`button-top ${props.appear}`}>
         <a className="button-top__link" href="#top" onClick={scroll.scrollToTop}>
            {" "}
            <img className="button-top__return" src={require("../arrowup.svg")} alt="Arrow Up" />
         </a>
      </div>
   );
}

export default ButtonUp;
