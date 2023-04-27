function verificationLength(cryptogramarr) {
  for (let i = 0; i <= cryptogramarr.length; i++) {
    if (cryptogramarr[i] === cryptogramarr[i + 1]) {
      cryptogramarr.splice(i, 2);
    }
  }
  return cryptogramarr;
}

function duplicationRemoveNumber(cryptogramarr) {
  for (let i = 0; i < cryptogramarr.length - 1; i++) {
    for (let j = 1; j < cryptogramarr.length; j++) {
      if (cryptogramarr[j] === cryptogramarr[j + 1]) {
        cryptogramarr.splice(j, 2);
        j--;
      }
    }
  }
  return cryptogramarr;
}

function problem2(cryptogram) {
  let cryptogramarr = cryptogram.split("");
  let removeNumber = duplicationRemoveNumber(cryptogramarr);
  if (removeNumber.length >= 1) {
    verificationLength(removeNumber);
  }
  return cryptogramarr.join("");
}

module.exports = problem2;
