const Validation = (inputData, feedData, emptyField) => {
   if (feedData !== null) {
      const equalFeed = feedData.filter(item => item.name === inputData.name);
      const [equal] = equalFeed;
      const regUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

      if (!inputData.name) {
         return "Name is required";
      } else if (inputData.name.length < 3 || inputData.name.length > 12) {
         return "Incorrect name length";
      }

      if (!inputData.url) {
         return "URL is required";
      } else if (!regUrl.test(inputData.url)) {
         return "Wrong URL";
      }

      if (equalFeed.length === 0) {
         return;
      } else if (inputData.name === equal.name) {
         return "Name already exist";
      }
   } else {
      return emptyField;
   }
};

export default Validation;
