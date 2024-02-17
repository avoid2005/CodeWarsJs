// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const occurs = {};
  const textArr = text.toLowerCase().replaceAll(" ", "").split("");
  textArr.forEach((word) => (occurs[word] = 0));
  textArr.forEach((word) => (occurs[word] += 1));
  const occursArr = Object.values(occurs).filter((num) => num > 1);
  return occursArr.length;
}

console.log(duplicateCount("adi permadi"));
