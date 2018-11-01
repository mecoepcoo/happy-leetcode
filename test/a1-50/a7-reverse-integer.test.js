const {reverse} = require('../../a1-50/a7-reverse-integer');
const should = require('should');

describe('是否正确翻转整数', () => {
  it('输入123，应该得到321', () => {
    const result = reverse(123);
    should(result).be.equal(321);
  });

  it('输入-123，应该得到-321', () => {
    const result = reverse(-123);
    should(result).be.equal(-321);
  });

  it('输入120，应该得到21', () => {
    const result = reverse(120);
    should(result).be.equal(21);
  });

  it('输入1534236469，应该得到0', () => {
    const result = reverse(1534236469);
    should(result).be.equal(0);
  });
});
