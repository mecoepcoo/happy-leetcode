/**
 * 将罗马数字转换为整数
 * 1.如果当前数字是最后一个数字，或者之后的数字比它小的话，则加上当前数字
 * 2.其他情况则减去这个数字
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = 0;
  const rule = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    // 左边成立时或表达式短路，无需考虑数组越界的情况
    if (i === arr.length - 1 || rule[arr[i + 1]] <= rule[arr[i]]) {
      sum += rule[arr[i]];
    } else {
      sum -= rule[arr[i]];
    }
  }
  return sum;
};

console.log(romanToInt('MCMXCIV')); // 1994