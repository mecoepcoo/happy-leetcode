/**
 * 简单判断括号是否配对
 * @param {string} s 要判断的字符串
 */
let isValid = function (s) {
  let rightSymbols = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      rightSymbols.push(')');
    } else if (s[i] == '[') {
      rightSymbols.push(']');
    } else if (s[i] == '{') {
      rightSymbols.push('}');
    } else if (rightSymbols.pop() != s[i]) {
      return false;
    }
  }
  return !rightSymbols.length;
};

module.exports = {
  isValid: isValid
}