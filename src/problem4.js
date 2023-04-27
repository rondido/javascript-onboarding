function atozSentenceArr() {
  const atozArr = [];
  for (let i = 97; i <= 122; i++) {
    atozArr.push(String.fromCharCode(i));
  }
  return atozArr;
}

function ztoaSentenceArr() {
  const ztoaArr = [];
  for (let i = 122; i >= 97; i--) {
    ztoaArr.push(String.fromCharCode(i));
  }
  return ztoaArr;
}

function getReverseSentence(word, atoz, ztoa) {
  let answer = "";
  const wordArr = word.split("");
  wordArr.map((value) => {
    let reverseSentence = value;
    if (atoz.includes(value.toLowerCase())) {
      let index = atoz.indexOf(value.toLowerCase());
      if (value === value.toLowerCase()) {
        reverseSentence = ztoa[index];
      } else {
        reverseSentence = ztoa[index].toUpperCase();
      }
    }
    if (ztoa.includes(value.toLowerCase())) {
      let index = ztoa.indexOf(value.toLowerCase());
      if (value === value.toLowerCase()) {
        reverseSentence = atoz[index];
      } else {
        reverseSentence = atoz[index].toUpperCase();
      }
    }
    answer += reverseSentence;
  });
  return answer;
}

function problem4(word) {
  let atoz = atozSentenceArr();
  let ztoa = ztoaSentenceArr();
  const result = getReverseSentence(word, atoz, ztoa);
  return result;
}

module.exports = problem4;
