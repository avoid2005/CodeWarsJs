// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  if (message === "") return "";
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const messageArr = Array.from(message);
  const rot = messageArr.map((letter) => {
    if (alphabet.includes(letter.toLowerCase())) {
      const letterPosition = alphabet.indexOf(letter.toLowerCase());
      let returnWord = "";

      if (letterPosition >= 13) {
        returnWord = alphabet[13 - (alphabet.length - letterPosition)];
      }
      if (letterPosition <= 12) {
        returnWord = alphabet[letterPosition + 13];
      }

      if (letter === letter.toUpperCase()) {
        return returnWord.toUpperCase();
      }
      if (letter === letter.toLowerCase()) {
        return returnWord.toLowerCase();
      }
    } else {
      return letter;
    }
  });
  return rot.join("");
}

console.log(rot13("dNn"));
