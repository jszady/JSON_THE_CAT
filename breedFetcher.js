const request = require('request');

// callback sees if we have an error if we do we will log it if not we will log the description

//callback(error, desc)
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error,response, body) => {
    if (error) {
      callback(error.message);
    } else {
      const data = JSON.parse(body);

      if(data.length === 0)
      {
        callback("breed not found", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });

};

module.exports = {fetchBreedDescription};