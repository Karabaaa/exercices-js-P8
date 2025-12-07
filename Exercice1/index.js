const pairNumbers = function (a, b) {
  let string = "";
  if (a === b || a > b) return string;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      string += i;
      if (i + 1 < b) string += ",";
    }
  }
  return string;
};
export default pairNumbers;

console.log(pairNumbers(1, 10));
