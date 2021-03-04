/**
 *
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated,
 * and only the integer part of the result is returned.
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if ( x === 1) { return 1; }
  for (let i = 0; i <= x / 2; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

console.log(mySqrt(0) === 0)
console.log(mySqrt(1) === 1)
console.log(mySqrt(12) === 3)
console.log(mySqrt(100) === 10)
console.log(mySqrt(101) === 10)
