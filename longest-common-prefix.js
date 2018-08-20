/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀， 返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  
};

class TrieNode {
  constructor() {
    this.key = '';
    this.son = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
      let cur = this.root;
      for (let i = 0; i < word.length; i++) {
        let c = word.charCodeAt(i);
        let node = cur.edges[c];
        if (node == null) {
          node = (cur.edges[c] = new TrieNode());
          node.value = word.charAt(i);
          node.numPass = 1;
        } else {
          node.numPass++;
        }
        cur = node;
      }
      return true;
  }
}