const fetch = require("node-fetch");
function getData() {
  url = "http://www.example.com/api/get/1";
  fetch(url)
    .then((response) => response)
    .then((data) => data);
}
console.log(getData());
