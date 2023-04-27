function arrValueCheck(arr) {
  answer = arr.filter(
    (num) => num === "3" || num === "6" || num === "9"
  ).length;
  return answer;
}
function createArr(number) {
  let arr = Array.from({ length: number }, (v, i) => i + 1)
    .toString()
    .split("");
  return arr;
}
// 3  6  9 13 16 19 23 26 29 33 36 39
function problem3(number) {
  const arr = createArr(number);
  return arrValueCheck(arr);
}

module.exports = problem3;
