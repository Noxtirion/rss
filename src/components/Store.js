import { observable, action } from "mobx";

class Store {
   @observable inputStore = [];
   @observable feedStore = [];

   @action setInputStore(inputStore) {
      this.inputStore = inputStore;
   }
   @action setFeedStore(feedStore) {
      this.feedStore = feedStore;
   }
}

export { Store };
