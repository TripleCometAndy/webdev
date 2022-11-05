var message = "Hello world!";
console.log(message);
var body = {
    key1: "one",
    key2: "two"
};
var resource = "https://qnj72wtnmlniggucn46hnyjgre0qnxxf.lambda-url.us-east-2.on.aws/";
var options = {
    method: "POST",
    body: JSON.stringify(body)
};
fetch(resource, options)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
