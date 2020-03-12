const Validation = (inputData, feedData) => {
   if (feedData !== null) {
      const equalFeed = feedData.filter(item => item.name === inputData.name);
      const [equal] = equalFeed;
      const regUrl = /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/i;

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
   }
};

export default Validation;
