var x = 1;
let x1 = 2;

function test() {
  var y = 2;
  const k = 9;
  if (y < 10) {
    var z = 100;
    const r = 20;
    console.log(z); // This is function scope, not block scope
    console.log(r); // Visable due to scope block
    console.log(k); // Scope inherted inside
  }
  console.log(z);
  //console.log(r); // Not visiable due to scope block
  console.log(x);
}

//console.log(y)

test();

//Diffrence between let, const
let a1 = 1;
a1 = 2; // I can reassign value

const a2 = 2;
//a2 = 3; // I can't reassign const variable

// const on object or array can manupliate values as it is referece
const obj = {
  name: "mz",
  age: 38,
};

obj.name = "moataz"; // This is not reassign
obj["test"] = 4; // No propblem as long as we manipulate properties

//obj = {}; // this is pure re-assign to adreess we can't perform it on constant

const obj1 = obj; // Same issue by reference

const obj2 = { ...obj }; // Spread operator to create new object

obj2.name = "asdfs";

console.log(obj);
console.log(obj2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//const a;
