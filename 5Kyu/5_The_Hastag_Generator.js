// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (str.trim().length === 0) return false;
  function removeSpace(target) {
    const targetArray = Array.from(target.trim());
    const removedSpace = targetArray.filter((letter, i, arr) => {
      if (letter !== " ") return letter;
      if (letter === " " && arr[i - 1] !== " ") return letter;
    });
    return removedSpace.join("");
  }

  const capitalized = removeSpace(str)
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");

  const end = "#" + capitalized;
  if (end.length > 140) return false;
  return end;
}
