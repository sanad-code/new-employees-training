// && Stop at first false value, if no falsy value it will continue
let a = 1 && 2 && 3; // Guarding condition

let cc = false;
let aa = cc && 30;
console.log(aa);
cc = true;
console.log(aa);

let b = 0 && 2 && 3;
let c = 1 && 0 && 3;

console.log(a, b, c);

// Stop on first true, else it will continue, thats why it is called default value
let dd = undefined;
let rr = dd || 10;
console.log(rr);

let a1 = 1 || 2 || 3;
let b2 = 0 || 2 || 3;
let c3 = 1 || 0 || 3;
console.log(a1, b2, c3);

//Nullish colleasing same as || but only see falsy values null, undefined
let a4 = "" ?? 2 ?? 3;
let b5 = 0 ?? 2 ?? 3;
let c6 = undefined ?? 0 ?? 3;
console.log(a4, b5, c6);
