// 80% Have wrong perception or understanding about this
// Most likely they guess issues related to this scope

// No this in arrow function, if this appear inside arrow function it takes its normal context

/////////////////////////////////////////////////////
///  YOU CAN'T ANSWER THIS WITHOUT INVOKATION    ////
// LEFT RIGHT NEW WINDOW ////////////////////////////
//////////////////////////////////////////////////////

name = "MzGlobal";

function test(s) {
  console.log(this.name, s);
}

const p1 = { name: "P1" };

// LEFT
const person = {
  name: "mz",
  age: 38,
  hello: function () {
    console.log(this.name);
  },
  child: {
    name: "tt",
    hello: function () {
      console.log(this.name);
    },
  },
};

person.hello();

person.child.hello();

//Right
//Changes this scope and invoke the functoin immediatly
test.apply(person, [3]);
test.call(person.child, 1);

//Bind prepare the function it dosen't invoke it
const prep = test.bind(person);
prep(5);

// New in js
// Old JS has no class, they used function to memic class behaviour
// by convention we use new keyword and name function with UpperFirstCase
function Employee({ empName, empAge }) {
  this.name = empName;
  this.age = empAge;
}

// function BehindTheSeen({ empName, empAge }) {
//     const this = {};
//     this.name = empName;
//     this.age = empAge;
//     return this;
//   }

const emp = new Employee({ empName: "ZZZ", empAge: 40 });
console.log(emp);

const r = new test(5);
console.log(r);

test(11);

person.hello.call(p1, 4);

new person.hello(4);
