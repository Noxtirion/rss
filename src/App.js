import React from "react";
import "./scss/style.scss";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import { Switch, Route } from "react-router-dom";
import FeedPage from "./components/FeedPage";

function App() {
   const feed = localStorage.getItem("feed");
   console.log(feed[0].name);

   return (
      <div>
         <TopBar />
         <Switch>
            <Route exact path="/">
               <div className="appWrapper">
                  <Form />
               </div>
            </Route>
            <Route exact path={`/${feed[0].name}`}>
               <FeedPage />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
