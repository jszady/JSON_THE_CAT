const request = require('request');
const arg = process.argv.splice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

request(url, (error,response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found !");
    } else {
    // console.log(data);
      console.log(data[0].description);
    }
  } else {
    console.log(`an error has occured ${error}`);
  }
});