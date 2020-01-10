/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (63.18%)
 * Likes:    172
 * Dislikes: 0
 * Total Accepted:    36.5K
 * Total Submissions: 57.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  let list = []
  let p = root
  list.push({ index: 0, ele: p })
  let result = []
  let index = 0
  while (list.length) {
    let cur = list.shift()
    p = cur.ele
    index = cur.index
    if (!result[index]) result[index] = []
    result[index].push(p.val)
    if (p.left) list.push({ index: index + 1, ele: p.left })
    if (p.right) list.push({ index: index + 1, ele: p.right })
  }
  result = result.reverse()
  return result
}
// @lc code=end

