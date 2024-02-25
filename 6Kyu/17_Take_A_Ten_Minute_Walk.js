// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let x = 0;
  let y = 0;
  walk.forEach((direction) => {
    if (direction === "e") x += 1;
    else if (direction === "w") x -= 1;
    else if (direction === "n") y += 1;
    else if (direction === "s") y -= 1;
  });
  if (x === 0 && y === 0) return true;
  else return false;
}
