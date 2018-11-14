/**
 * 最后一个单词的长度
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
* 如果不存在最后一个单词，请返回 0 。
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 输入: "Hello World"
 * 输出: 5
 * @param {string} s
 * @return {number}
 */
// let lengthOfLastWord = function(s) {
//   s = s.replace(/\s\s*$/, '');
//   if (!s || !s.length) {
//     return 0;
//   }
//   let num = 0;
//   let reg = /\s?(\S+)$/;
//   num = s.match(reg)[1].length;
//   return num;
// };
let lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().length;
}

module.exports = {
  lengthOfLastWord: lengthOfLastWord,
}