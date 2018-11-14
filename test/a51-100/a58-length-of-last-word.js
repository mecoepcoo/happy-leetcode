const {lengthOfLastWord} = require('../../a51-100/a58-length-of-last-word');
const should = require('should');

describe('最后一个单词的长度测试', () => {
  it('输入 hellow world，应该得到 5', () => {
    const input = 'hello world';
    let result = lengthOfLastWord(input);
    should(result).be.eql(5);
  });

  it('输入""，应该得到 0', () => {
    const input = '';
    let result = lengthOfLastWord(input);
    should(result).be.eql(0);
  });

  it('输入"       "，应该得到 0', () => {
    const input = '';
    let result = lengthOfLastWord(input);
    should(result).be.eql(0);
  });

  it('输入"hello"，应该得到 5', () => {
    const input = 'hello';
    let result = lengthOfLastWord(input);
    should(result).be.eql(5);
  });
});
