// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
  const caseType = array[0] === array[0].toLowerCase() ? "low" : "up";
  const missing = [];
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
  const arrayInFull = alphabet.slice(
    alphabet.indexOf(array[0].toLowerCase()),
    alphabet.indexOf(array[array.length - 1].toLowerCase()) + 1,
  );
  arrayInFull.forEach((lett) => {
    const letter = caseType === "low" ? lett.toLowerCase() : lett.toUpperCase();
    if (!array.includes(letter)) missing.push(letter);
  });
  return missing.join("");
}
