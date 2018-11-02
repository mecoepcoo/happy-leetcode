const {findMedianSortedArrays} = require('../../a1-50/a4-median-of-two-sorted-arrays');
const should = require('should');

describe('两个排序数组的中位数测试', () => {
  it('输入[1, 3]，[2]，应该得到2.0', () => {
    const input1 = [1, 3];
    const input2 = [2];
    const result = findMedianSortedArrays(input1, input2);

    should(result).be.eql(2.0);
  });

  it('输入[2], [1, 3]，应该得到2.0', () => {
    const input1 = [2];
    const input2 = [1, 3];
    const result = findMedianSortedArrays(input1, input2);

    should(result).be.eql(2.0);
  });

  it('输入[1, 2]，[3, 4]，应该得到2.5', () => {
    const input1 = [1, 2];
    const input2 = [3, 4];
    const result = findMedianSortedArrays(input1, input2);

    should(result).be.eql(2.5);
  });

  it('输入[]，[1]，应该得到1', () => {
    const input1 = [];
    const input2 = [1];
    const result = findMedianSortedArrays(input1, input2);

    should(result).be.eql(1);
  });

  it('输入[3]，[-2, -1]，应该得到-1', () => {
    const input1 = [3];
    const input2 = [-2, -1];
    const result = findMedianSortedArrays(input1, input2);

    should(result).be.eql(-1);
  });
});
