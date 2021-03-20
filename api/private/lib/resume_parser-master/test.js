const parser = require("./src");
const file = "your file dir";

parser(file)
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
