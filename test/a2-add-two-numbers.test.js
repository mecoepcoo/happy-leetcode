const {addTwoNumbers, ListNode} = require('../a2-add-two-numbers');
const should = require('should');

describe('两数相加测试', () => {
  it('输入l1: 2->4->3, l2: 5->6->4，应该得到 7->0->8 ', () => {
    const input1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null
        }
      }
    };
    const input2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null
        }
      }
    };
    let result = addTwoNumbers(input1, input2);
    should(result instanceof ListNode).be.eql(true);

    result = JSON.stringify(result);

    should(result).be.eql(JSON.stringify({
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null
        }
      }
    }));
  });

  it('输入l1: 0->1, l2: 0->1->2，应该得到 0->2->2', () => {
    const input1 = {
      val: 0,
      next: {
        val: 1,
        next: null
      }
    };
    const input2 = {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null
        }
      }
    };
    let result = addTwoNumbers(input1, input2);
    should(result instanceof ListNode).be.eql(true);

    result = JSON.stringify(result);

    should(result).be.eql(JSON.stringify({
      val: 0,
      next: {
        val: 2,
        next: {
          val: 2,
          next: null
        }
      }
    }));
  });

  it('输入l1: null, l2: 0->1，应该得到 0->1', () => {
    const input1 = null;
    const input2 = {
      val: 0,
      next: {
        val: 1,
        next: null
      }
    };
    let result = addTwoNumbers(input1, input2);
    should(result instanceof ListNode).be.eql(true);

    result = JSON.stringify(result);

    should(result).be.eql(JSON.stringify({
      val: 0,
      next: {
        val: 1,
        next: null
      }
    }));
  });

  it('输入l1: 9->9, l2: 1，应该得到 0->0->1', () => {
    const input1 = {
      val: 9,
      next: {
        val: 9,
        next: null
      }
    };
    const input2 = {
      val: 1,
      next: null
    };
    let result = addTwoNumbers(input1, input2);
    should(result instanceof ListNode).be.eql(true);

    result = JSON.stringify(result);

    should(result).be.eql(JSON.stringify({
      val: 0,
      next: {
        val: 0,
        next: {
          val: 1,
          next: null
        }
      }
    }));
  });
});
