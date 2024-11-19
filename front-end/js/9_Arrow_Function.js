const test = function (a) {
  return a + 1;
};

const arrow = (a) => {
  return a + 1;
};

const arrowShort = (a) => a + 1;

console.log(test(1));

console.log(arrow(1));

console.log(arrowShort(1));
