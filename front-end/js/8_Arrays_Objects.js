const arr = [1, 2, 3];

arr.push(4); // Add to the end
arr.pop(); // Remove from the end

arr.unshift(0); // Add to begin
arr.shift(); // Remove from begin

console.log(arr);

// Higher order functions

//Map
const doubleArr = arr.map((ele) => ele * 2);

console.log(doubleArr);
console.log(arr);

//Foreach
arr.forEach((ele) => console.log(`Hello ${ele}`));

//Filter , filter out condition
const even = arr.filter((ele) => ele % 2 == 0);

const odd = arr.filter((ele) => {
  if (ele % 2 == 1) {
    return true;
  } else {
    return false;
  }
});

console.log(even);
console.log(odd);

//// Object

const person = {
  name: "moataz",
  age: 38,
};

const personKeys = Object.keys(person);
console.log(personKeys);
const personValues = Object.values(person);
console.log(personValues);

const personEntries = Object.entries(person);
console.log(personEntries);

personEntries.forEach(([key, val]) => console.log(key, val));
