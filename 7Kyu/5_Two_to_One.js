// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const sorted = Array(alphabet.length).fill(null);
  Array.from(s1 + s2).forEach((letter) => {
    if (!sorted.includes(letter) && alphabet.includes(letter)) {
      sorted.splice(alphabet.indexOf(letter), 1, letter);
    }
  });
  return sorted.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
