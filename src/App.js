import React from "react";
import "./scss/style.scss";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import { Switch, Route } from "react-router-dom";
import FeedPage from "./components/FeedPage";
import { observer } from "mobx-react";
import { toJS } from "mobx";

function App({ store }) {
   // console.log(toJS(store.inputStore));
   return (
      <div>
         <TopBar />
         <Switch>
            <Route exact path="/">
               <div className="appWrapper">
                  <Form store={store} />
               </div>
            </Route>
            <Route path="/feed/">
               <FeedPage feedStore={toJS(store.feedStore)} />
            </Route>
         </Switch>
      </div>
   );
}

export default observer(App);
