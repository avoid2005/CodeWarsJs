// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  const punctuation = [",", ".", "?", "!"];
  return str
    .split(" ")
    .map((word) => {
      if (punctuation.includes(word)) return word;
      else return word.slice(1) + word[0] + "ay";
    })
    .join(" ");
}

console.log(pigIt("Hello world !"));
