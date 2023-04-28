function greedyMoney(money) {
  var answer = [];
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let coin of moneyList) {
    answer.push(Math.floor(money / coin)); // 1
    money -= coin * Math.floor(money / coin); // 50000 * 2 100000
  }
  return answer;
}

function problem5(money) {
  return greedyMoney(money);
}
module.exports = problem5;
