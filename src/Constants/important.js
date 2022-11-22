//translation api by rapidapi

var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": "43b7880a75msh06367cada7f2cdbp1670efjsnf9cbce556b34",
  },
  data: { q: "English is hard, but detectably so" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
