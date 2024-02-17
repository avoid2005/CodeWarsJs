// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split("");
  const getLength = (letter) => wordArr.filter((a) => a === letter).length;
  const encode = wordArr.map((letter) => (getLength(letter) === 1 ? "(" : ")"));
  return encode.join("");
}
