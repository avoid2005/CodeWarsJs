// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops) {
  let remainingPeople = 0;
  busStops.forEach((halte) => {
    remainingPeople += halte[0];
    remainingPeople -= halte[1];
  });
  return remainingPeople;
};
