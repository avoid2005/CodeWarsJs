// https://www.codewars.com/kata/5264d2b162488dc400000001

// function spinWords(string) {
//   const words = string.split(" ")
//   const wordsReversed = words.map((word) => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("")
//     } else return word
//   })
//   return wordsReversed.join(" ")
// }

const spinWords = (string) =>
  string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ")

console.log(spinWords("This is another test"))
