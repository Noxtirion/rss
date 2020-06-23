import "./button-up.styles.scss";

import React from "react";
import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

function ButtonUp(props) {
   return (
      <div className={`button-top ${props.appear}`}>
         <div className="button-top__wrapper" onClick={scroll.scrollToTop}>
            {" "}
            <img
               className="button-top__return"
               src={require("../../assets/arrowup.svg")}
               alt="Arrow Up"
            />
         </div>
      </div>
   );
}

export default ButtonUp;
