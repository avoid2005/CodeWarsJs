// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  const xArr = x.split(" ");
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const scores = {};
  alphabet.forEach((letter, i) => {
    scores[letter] = i + 1;
  });
  const highestScore = xArr.map((word) => {
    const sumWordScore = word
      .split("")
      .map((score) => scores[score])
      .reduce((a, c) => a + c, 0);
    return sumWordScore;
  });
  return xArr[highestScore.indexOf(Math.max(...highestScore))];
}
