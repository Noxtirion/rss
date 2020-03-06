import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Store } from "./components/Store";
// const store = new Store();

ReactDOM.render(
   <Router>
      <App />
   </Router>,
   document.getElementById("root")
);
