const {romanToInt} = require('../a13-roman-to-integer');
const should = require('should');

describe('罗马数字转换为整数', () => {
  it('输入III，应该得到3', () => {
    const result = romanToInt('III');
    should(result).be.equal(3);
  });

  it('输入IV，应该得到4', () => {
    const result = romanToInt('IV');
    should(result).be.equal(4);
  });

  it('输入IX，应该得到9', () => {
    const result = romanToInt('IX');
    should(result).be.equal(9);
  });

  it('输入LVIII，应该得到58', () => {
    const result = romanToInt('LVIII');
    should(result).be.equal(58);
  });

  it('输入MCMXCIV，应该得到1994', () => {
    const result = romanToInt('MCMXCIV');
    should(result).be.equal(1994);
  });
});
