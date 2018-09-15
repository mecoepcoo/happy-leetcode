const {isValid} = require('../valid-parentheses');
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
