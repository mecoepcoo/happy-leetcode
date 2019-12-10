/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (51.40%)
 * Likes:    272
 * Dislikes: 0
 * Total Accepted:    51.6K
 * Total Submissions: 100.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 补零
  let x = a, y = b
  if (a.length < b.length) {
    [x, y] = [b, a]
  }
  let diff = x.length - y.length
  y = (new Array(diff)).fill(0).join('') + y
  // 按位相加，满2进1
  let i = x.length - 1
  let sum = ''
  let carry = 0, digit = 0
  while (i >= 0) {
    digit = (+x[i]) + (+y[i]) + carry
    if (digit < 2) {
      carry = 0
    } else {
      digit %= 2
      carry = 1
    }
    sum = digit + sum
    i--
  }
  if (carry > 0) {
    sum = carry + sum
  }
  return sum
}
// @lc code=end

