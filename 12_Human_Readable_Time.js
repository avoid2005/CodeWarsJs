// https://www.codewars.com/kata/52685f7382004e774f0001f7
// train again 4 times to make this code

function humanReadable(seconds) {
  const pad = (val) => (val < 10 ? "0" + val : val);
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds >= 3600 ? seconds % 3600 : seconds) / 60);
  let s = Math.floor((seconds % 3600) % 60);
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
