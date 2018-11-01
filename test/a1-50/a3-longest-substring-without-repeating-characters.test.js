const {lengthOfLongestSubstring} = require('../../a1-50/a3-longest-substring-without-repeating-characters');
const should = require('should');

describe('无重复字符的最长子串测试', () => {
  it('输入abcabcbb，应该得到abc', () => {
    const input = 'abcabcbb';
    const result = lengthOfLongestSubstring(input);

    should(result).be.eql(3);
  });

  it('输入bbbbbb，应该得到b', () => {
    const input = 'bbbbbb';
    const result = lengthOfLongestSubstring(input);

    should(result).be.eql(1);
  });

  it('输入pwwkew，应该得到wke', () => {
    const input = 'pwwkew';
    const result = lengthOfLongestSubstring(input);

    should(result).be.eql(3);
  });
});
