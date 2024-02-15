// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const times = (number) => ({ operator: "*", number });
const dividedBy = (number) => ({ operator: "/", number });
const plus = (number) => ({ operator: "+", number });
const minus = (number) => ({ operator: "-", number });

function NewNumber(newNumber) {
  return function(operatorAndNumber = null) {
    if (operatorAndNumber === null) return newNumber;
    const selfNumber = newNumber;
    const { operator, number } = operatorAndNumber;
    if (operatorAndNumber) {
      if (operator === "*") return selfNumber * number;
      if (operator === "/") return Math.floor(selfNumber / number);
      if (operator === "+") return selfNumber + number;
      if (operator === "-") return selfNumber - number;
    }
  };
}

const [zero, one, two] = [NewNumber(0), NewNumber(1), NewNumber(2)];
const [three, four, five] = [NewNumber(3), NewNumber(4), NewNumber(5)];
const [six, seven, eight, nine] = [
  NewNumber(6),
  NewNumber(7),
  NewNumber(8),
  NewNumber(9),
];
