var server_echo; // "var" should be replaced by "let" or "const" so it can stick to a scope and/or be constant
var json = {
  json: JSON.stringify({
    // redundant nested naming which leads to confusion during data handling, "data" or something more meaningful would be appropriate
    a: 1,
    b: 2,
  }),
  delay: 3,
}; // global variables that should be encapsulated, declared and defined within the scope of a dedicated function
fetch("/echo/", {
  method: "post", // method name needs to be in caps, eg "POST"
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay, // should be defined in a proper function with parameters to construct the query string
})
  // old promise handling syntax, prefer async / await for better readability
  // old anonymous function syntax, prefer arrow functions for scope porosity
  .then(function (response) {
    server_echo = response.json().echo; // ERROR: the json method returns a promise which needs to be awaited before extracting the data it contains
    return response.json(); // there is little interest in returning the response here too if it is already passed to a global variable
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error); // prefer console.error instead of .log
  });
server_echo.forEach(
  // the native forEach is less performant than a for loop
  (element) => console.log(element) // prefer console.info instead of .log
);

/*
Overall, it's mainly old javascript that does not take advantage of the new features of Ecmascript late versions
*/
