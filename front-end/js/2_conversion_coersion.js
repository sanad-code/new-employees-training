let x = "1";
let x1 = "1.1";

let y = Number(x); // explist type casting
let z = parseInt(x1);
let z1 = parseFloat(x1);
let r = +x;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z, z);
console.log(typeof z1, z1);
console.log(typeof r, r);

let u = 1;

console.log(u.toString());
console.log(u + ""); // This is bad practice
console.log(`${u}`); //Better use the string literal

let o = 1;

console.log(Boolean(o));

//Coercision wierd examples

console.log(1 + "1");
console.log("1" + 1);
console.log("1" * 4);
console.log(NaN + 1);
console.log(undefined + 1);
console.log(null + 1);
