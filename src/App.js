import React from "react";

import TopBar from "./components/top-bar/top-bar.component.jsx";
import Form from "./pages/form/form.component.jsx";
import FeedPage from "./pages/feed-page/feed-page.component.jsx";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
   return (
      <div>
         <TopBar />
         <Switch>
            <Route exact path="/">
               <div className="appWrapper">
                  <Form />
               </div>
            </Route>
            <Route exact path="/:nameId">
               <FeedPage />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
