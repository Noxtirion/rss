const Validation = (inputData, feedData) => {
   if (!inputData.name) {
      return "Name is required";
   } else if (inputData.name.length < 3 || inputData.name.length > 10) {
      return "Incorrect name length";
   }

   const equalFeed = feedData.filter(item => item.name === inputData.name);
   const [equal] = equalFeed;

   if (equalFeed.length === 0) {
      return;
   } else if (inputData.name === equal.name) {
      return "Name already exist";
   }

   console.log(equalFeed);
   console.log(inputData);

   if (!inputData.url) {
      return "URL is required";
   } else if (
      !/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/i.test(
         inputData.url
      )
   ) {
      return "Wrong URL";
   }
};

export default Validation;
