/**
 * 最长回文子串
 * 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba"也是一个有效答案。
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  // 马拉车算法，将数组长度变为2n+1，恒为奇数
  let ns = '$#' + s.split('').join('#') + '#';
  let p = [];
  p[0] = 0;
  for (let i = 1; i < ns.length; i++) {
    let j = 1;
    p[i] = 1;
    while (ns[i + j] == ns[i - j]) {
      j++;
      p[i]++;
    }
  }
  let max = Math.max(...p) - 1;
  let id = p.indexOf(max + 1);
  let longest = ns.slice(id - max, id + max);
  longest = longest.split('#').join('');
  return longest;
}

exports.longestPalindrome = longestPalindrome;