// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
  const filter = pin.replaceAll(/[0-9]/g, "");
  if (filter.length === 0) {
    return pin.length === 4 || pin.length === 6 ? true : false;
  } else return false;
}

console.log(validatePIN("a123"));
