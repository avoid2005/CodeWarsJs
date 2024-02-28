// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// Fvck, 57 Minutes Coding Time

function towerBuilder(nFloors) {
  function stonePositionRange(size, startAt) {
    const left = [...Array(size).keys()].map((num) => num + startAt);
    const right = Array(left.length - 1)
      .fill(null)
      .map((_, i) => left[left.length - 1] + (i + 1));
    return [...left, ...right];
  }

  const pondasiLength = nFloors + nFloors - 1;
  const midPosition = Math.floor(pondasiLength / 2);
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    const stonePosition = stonePositionRange(i + 1, midPosition - i);
    const floor = [...Array(pondasiLength).keys()].map((_, position) => {
      if (stonePosition.includes(position)) return "*";
      else return " ";
    });
    tower.push(floor.join(""));
  }
  return tower;
}
