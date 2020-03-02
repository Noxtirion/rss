import React from "react";
import "./scss/style.scss";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import CollectionPage from "./components/CollectionPage";

function App() {
   return (
      <div>
         <TopBar />
         <div className="appWrapper">
            <Form />
            <CollectionPage />
         </div>
      </div>
   );
}

export default App;
