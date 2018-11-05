const {longestPalindrome} = require('../../a1-50/a5-longest-palindromic-substring');
const should = require('should');

describe('最长回文子串测试', () => {
  it('输入babad，应该得到bab或aba', () => {
    const input = 'babad';
    const result = longestPalindrome(input);

    should(result).be.eql('bab');
  });

  it('输入cbbd，应该得到bb', () => {
    const input = 'cbbd';
    const result = longestPalindrome(input);

    should(result).be.eql('bb');
  });
});
