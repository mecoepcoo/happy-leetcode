const {twoSum} = require('../../a1-50/a1-two-sum');
const should = require('should');

describe('两数之和测试', () => {
  it('输入[5, 6, 13, 15]， 17，应该得到[]', () => {
    const input = [5, 6, 13, 15];
    const result = twoSum(input, 17);

    should(result).be.eql([]);
  });

  it('输入[5, 6, 13, 15]， 19，应该得到[1, 2]', () => {
    const input = [5, 6, 13, 15];
    const result = twoSum(input, 19);

    should(result).be.eql([1, 2]);
  });
});
