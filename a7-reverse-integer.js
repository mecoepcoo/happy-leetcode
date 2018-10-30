/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = '+';
  if (x < 0) {
    sign = '-';
  }
  let num = +(sign + (Math.abs(x) + '').split('').reverse().join(''));
  return num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) ? num : 0;
};

exports.reverse = reverse;

let r1 = reverse(123);
let r2 = reverse(-123);
let r3 = reverse(120);
console.log(r1, r2, r3);