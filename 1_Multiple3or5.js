// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  if (number < 0 || number <= 3) return 0
  let result = 0
  for (i = 1; i < number; i++) i % 3 === 0 || i % 5 === 0 ? (result += i) : ""
  return result
}
