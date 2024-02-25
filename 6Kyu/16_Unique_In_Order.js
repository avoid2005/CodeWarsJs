// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function(iterable) {
  let iterableType = typeof iterable;
  const target = iterableType === "string" ? Array.from(iterable) : iterable;
  const unique = target.filter((item, i, arr) => {
    return item !== arr[i - 1];
  });
  return unique;
};

console.log(uniqueInOrder([1, 1, 2, 3, 4, 6, 8]));
