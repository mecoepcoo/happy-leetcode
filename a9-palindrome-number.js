/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 若样本大多分布在正向，则不需要这个判断（节约性能）
  if (x < 0) {
    return false;
  }
  let str = x.toString();
  let n;
  n = str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2;
  let leftStr = str.slice(0, n);
  let rightStr = str.slice(-n);
  return leftStr === rightStr.split('').reverse().join('') ? true : false;
};

exports.isPalindrome = isPalindrome;
