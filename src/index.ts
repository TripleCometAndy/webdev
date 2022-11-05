let message: string = "Hello world!";
console.log(message);

const body = {
  key1: "one",
  key2: "two"
}

const resource = "https://qnj72wtnmlniggucn46hnyjgre0qnxxf.lambda-url.us-east-2.on.aws/"
const options = {
  method: "POST",
  body: JSON.stringify(body)
}
fetch(resource, options)
  .then((response) => response.json())
  .then((data) => console.log(data))