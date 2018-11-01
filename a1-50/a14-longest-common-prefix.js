/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀， 返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }
  let trie = new Trie();
  for (let word of strs) {
    trie.insert(word);
  }  
  // console.log(trie);
  let word = strs[0];
  let n = strs.length;
  // 公共前缀会被经过n次，筛选出第一次小于n的结点即可
  let cur = trie.root;
  let longestPrefix = '';
  for (let i = 0; i < word.length; i++) {
    let c = word.charCodeAt(i);
    let node = cur.son[c];
    if (node.passNum === n) {
      longestPrefix += node.key;
    } else {
      break;
    }
    cur = node;
  }
  return longestPrefix;
};

class TrieNode {
  constructor(key) {
    this.key = key;
    this.son = [];
    this.isEnd = false;
    this.passNum = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      let c = word.charCodeAt(i);
      let node = cur.son[c];
      if (node == null) {
        node = (cur.son[c] = new TrieNode());
        node.key = word.charAt(i);
        node.passNum = 1;
      } else {
        node.passNum++;
      }
      cur = node;
    }
    cur.isEnd = true;
    return true;
  }

  isContainPrefix(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      let c = word.charCodeAt(i);
      if (cur.son[c]) {
        cur = cur.son[c];
      } else {
        return false;
      }
      return true;
    }
  }
}

exports.longestCommonPrefix = longestCommonPrefix;

console.log(longestCommonPrefix([]));