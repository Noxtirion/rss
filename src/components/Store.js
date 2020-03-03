import { observable, action } from "mobx";

class Store {
   @observable inputData = { name: "test", url: "" };
   @observable feedData = [];

   @action setInputData(inputData) {
      this.inputData = inputData;
   }
   @action setFeedData(feedData) {
      this.feedData = feedData;
   }
}

export { Store };
