/**
 *
 * @param {number[]} pobiNumbers
 * @param {number[]} cronbNumbers
 */
function isOdd(number) {
  return number % 2 === 1;
}
function isEven(number) {
  return number % 2 === 0;
}
function validatePlayerLeftPage(...players) {
  if (players.filter(isEven).length >= 1) {
    throw Error();
  }
}
function validatePlayerRightage(...players) {
  if (players.filter(isOdd).length >= 1) {
    throw Error();
  }
}
function validateProblem1(
  [pobiLeftPageNumber, pobiRightPageNumber],
  [crongLeftPageNumber, crongRightPageNumber]
) {
  // 1. odd, even
  // 2. left, right substract result is 1
  // 3. validate type
  // 4. first page, lastPage
  validatePlayerLeftPage(pobiLeftPageNumber, crongLeftPageNumber);
  validatePlayerRightage(pobiRightPageNumber, crongRightPageNumber);
  if (
    Math.abs(pobiLeftPageNumber - pobiRightPageNumber) !== 1 ||
    Math.abs(crongLeftPageNumber - crongRightPageNumber) !== 1
  ) {
    throw Error();
  }
}

function getaddAndMultiMax(page) {
  const max = page.map((element) => {
    const { sum, multiple } = element
      .toString()
      .split("")
      .reduce(
        (acc, cur) => ({
          sum: acc.sum + cur * 1,
          multiple: acc.multiple * parseInt(cur),
        }),
        { sum: 0, multiple: 1 }
      );
    return Math.max(sum, multiple);
  });
  return Math.max(...max);
}
// don't use else keyword

function problem1(pobi, crong) {
  //pobi,crong page수가 각각 들어있다.
  // Cleary define variable names
  try {
    validateProblem1(pobi, crong);
    return processGameResult(pobi, crong);
  } catch (e) {
    return -1;
  }
  // const check = checkValue(pobi, crong);
  // return check ? processGameResult(pobi, crong) : -1;
}
function processGameResult(pobi, crong) {
  // camelcase
  // getadd
  // getAdd
  const pobimax = getaddAndMultiMax(pobi);
  const crongmax = getaddAndMultiMax(crong);

  if (pobimax < crongmax) {
    return 2;
  }
  if (pobimax > crongmax) {
    return 1;
  }
  // equals
  return 0;
}

module.exports = problem1;
