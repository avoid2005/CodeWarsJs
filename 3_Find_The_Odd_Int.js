// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const [occurs, occursOdd] = [{}, []]
  A.forEach((num) => (num in occurs ? (occurs[num] += 1) : (occurs[num] = 1)))
  for (const num in occurs) occurs[num] % 2 !== 0 ? occursOdd.push(num) : ""
  return Number(occursOdd[0])
}
