function problem2(cryptogram) {
  var answer = "";
  let cryptogramarr = cryptogram.split("");
  console.log(typeof cryptogramarr);
  for (let i = 0; i < cryptogramarr.length - 1; i++) {
    if (cryptogramarr[i] === cryptogramarr[i + 1]) {
      cryptogramarr.splice(i, 2);
      i--;
    }
  }
  console.log(cryptogramarr);
  return cryptogramarr;
}

module.exports = problem2;
