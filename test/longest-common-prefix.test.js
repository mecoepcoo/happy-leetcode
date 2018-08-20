const {longestCommonPrefix} = require('../longest-common-prefix');
const should = require('should');

describe('寻找最长公共前缀', () => {
  it('输入["flower","flow","flight"]，应该得到"fl"', () => {
    const result = longestCommonPrefix(['flower','flow','flight']);
    should(result).be.equal('fl');
  });

  it('输入["dog","racecar","car"]，应该得到""', () => {
    const result = longestCommonPrefix(['dog','racecar','car']);
    should(result).be.equal('');
  });
});
