const {isPalindrome} = require('../palindrome-number');
const should = require('should');

describe('是否是回文数', () => {
  it('输入121，应该得到true', () => {
    const result = isPalindrome(121);
    should(result).be.equal(true);
  });

  it('输入-121，应该得到false', () => {
    const result = isPalindrome(-121);
    should(result).be.equal(false);
  });

  it('输入10，应该得到false', () => {
    const result = isPalindrome(10);
    should(result).be.equal(false);
  });
});
