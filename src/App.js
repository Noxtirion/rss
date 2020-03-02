import React from "react";
import "./scss/style.scss";
import TopBar from "./components/TopBar";
import Form from "./components/Form";

function App() {
   return (
      <div>
         <TopBar />
         <div className="appWrapper">
            <Form />
         </div>
      </div>
   );
}

export default App;
