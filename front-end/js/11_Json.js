//JSON is same as object in js except it contains ""

// THis is normal object
const person = {
  name: "mz",
  age: 38,
};

//To be json
const json = JSON.stringify(person);
console.log(json);

const json1 = JSON.stringify(person, null, 2);
console.log(json1);

const stringJson = '{"name":"mz", "age":38}';
console.log(typeof stringJson);

const jsonFromString = JSON.parse(stringJson);
console.log(jsonFromString);
console.log(typeof jsonFromString);
