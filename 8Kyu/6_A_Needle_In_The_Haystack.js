// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  return position ? `found the needle at position ${position}` : false;
}
