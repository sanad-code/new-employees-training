// Array destructure

const arr = [1, 2, 3, 4];

console.log(arr);

//If i want to access element
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [a1, b1, c1, d1] = arr;
console.log(a1, b1, c1, d1);

const [a2, , , d2] = arr;
console.log(a2, d2);

const [t, y] = [1, 2];
const [k, s] = [y, t];
console.log(k, s);

const [a3, b3, ...rest] = arr;
console.log(a3, b3, rest);

const [[a5, a6], b4, d4] = [[...arr]];
console.log(b4, d4, a5, a6);

/// Object destruct

const person = {
  name: "mz",
  age: 38,
};

const name = person.name;
const age = person.age;

const { name: name1, age: age1 } = person;

console.log(name1, age1);
