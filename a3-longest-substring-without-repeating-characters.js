/**
 * 无重复字符的最长子串
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 无重复字符的最长子串是 "abc"，其长度为 3。
 * 
 * 思路：使用滑动窗口来检查，用Map来存储滑动窗口
 */

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let max = 0;
  let n = s.length;
  let map = new Map();

  for (let i = 0, j = 0; j < n; j++) {
    if (!(map.get(s[j]) == undefined)) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    map.set(s[j], j);
    max = Math.max(max, j - i + 1);
  }
  return max;
};

module.exports = {
  lengthOfLongestSubstring
}