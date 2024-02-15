// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// 30 Minutes + Coding Time

function isIsogram(str) {
  if (!str) return true;
  let [isogram, emptyStr] = [true, ""];
  const strArr = Array.from(str.replaceAll(" ", ""));
  strArr.forEach((letter) => {
    if (!emptyStr.includes(letter.toUpperCase()))
      emptyStr += letter.toUpperCase();
    else isogram = false;
  });
  return isogram;
}
