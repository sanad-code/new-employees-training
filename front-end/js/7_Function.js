test();

// Funciton declaratio=n
// Subjected to hoisting
function test() {
  console.log("test");
}

//test2(); //we can't call this here

// Function expression
var test2 = function (name = "hamada") {
  console.log(name);
  console.log(arguments[2]);
};

test2("sdfsd", 1, 3, 4, 5);

var test3 = function (...param) {
  for (p of param) {
    console.log(p);
  }
};

test3(1, 2, 3, 4);

const map = function (fnc) {
  fnc();
};

const sysout = function () {
  console.log("sysout");
};

map(sysout);
