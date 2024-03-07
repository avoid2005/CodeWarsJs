// https://www.codewars.com/kata/583203e6eb35d7980400002a

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (!arr.length) return 0;
  const sum = arr.filter((face) => {
    if (
      face.length === 2 &&
      (face.includes(":") || face.includes(";")) &&
      (face.includes(")") || face.includes("D"))
    ) {
      return face;
    }
    if (
      face.length === 3 &&
      (face[0].includes(":") || face[0].includes(";")) &&
      (face[1].includes("-") || face[1].includes("~")) &&
      (face[2].includes(")") || face[2].includes("D"))
    ) {
      return face;
    }
  });
  return sum.length;
}
