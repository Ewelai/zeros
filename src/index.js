module.exports = function getZerosCount(number) {
  let n = 0;
  let f = 5;

  while (number !== 0) {
    number = Math.floor(number / f);
    n = number + n;
  }

  return n;
}
