// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  const wordsArr = words.split(" ");
  const orderedWordsArr = Array(wordsArr.length).fill(null);
  wordsArr.forEach((word) => {
    const numberInWord = Number(word.replace(/[^0-9]/g, ""));
    orderedWordsArr.splice(numberInWord - 1, 1, word);
  });
  return orderedWordsArr.join(" ");
}
