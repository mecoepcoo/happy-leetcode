const {isValid} = require('../../a1-50/a26-remove-duplicates-from-sorted-array');
const should = require('should');

describe('括号配对测试', () => {
  it('输入"{()[{}]}"，应该得到true', () => {
    const input = '{()[{}]}';
    const result = isValid(input);

    should(result).be.eql(true);
  });

  it('输入"[{(})]"，应该得到false', () => {
    const input = '[{(})]';
    const result = isValid(input);

    should(result).be.eql(false);
  });
});
