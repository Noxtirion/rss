import React from "react";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

function ButtonUp(props) {
   return (
      <div className={`button-top ${props.appear}`}>
         <a className="button-top__link" href="#top" onClick={scroll.scrollToTop}>
            {" "}
            <img className="button-top__return" src={require("../arrowup.svg")} alt="Arrow Up" />
            {/* <button className="button-top__return">Up</button> */}
         </a>
      </div>
   );
}

export default ButtonUp;
