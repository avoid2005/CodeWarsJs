// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const alphabetArray = Array.from("abcdefghijklmnopqrstuvwxyz");
  return Array.from(text)
    .filter((word) => {
      if (alphabetArray.includes(word.toLowerCase())) return word;
    })
    .map((word) => {
      return alphabetArray.indexOf(word.toLowerCase()) + 1;
    })
    .join(" ");
}

console.log(alphabetPosition("Adi Permadi"));
