import React from "react";

function ButtonUp(props) {
   return (
      <div className={`button-top ${props.appear}`}>
         <a className="button-top__link" href="#top">
            {" "}
            <img className="button-top__return" src={require("../arrowup.svg")} alt="Arrow Up" />
            {/* <button className="button-top__return">Up</button> */}
         </a>
      </div>
   );
}

export default ButtonUp;
