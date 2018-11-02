/**
 * 两个排序数组的中位数
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 * 你可以假设 nums1 和 nums2 不同时为空。
 * nums1 = [1, 3]
 * nums2 = [2]
 * 中位数是 2.0
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  if (m == 0 && n % 2 == 0) {
    return (nums2[n / 2 - 1] + nums2[n / 2]) / 2;
  } else if (m == 0 && n % 2 != 0) {
    return nums2[(n / 2) >> 0];
  }

  // 保证数组1最短
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // 马拉车算法，将数组长度变为2n+1，恒为奇数
  /* nums1 = ('#.' + nums1.join('.#.') + '.#').split('.');
  nums2 = ('#.' + nums2.join('.#.') + '.#').split('.'); */

  // l: left, r: right, c: cut
  let l1, l2, r1, r2, c1, c2, low = 0, high = 2 * m;
  // 二分
  while (low <= high) {
    c1 = ((low + high) / 2) >> 0;
    c2 = (m + n - c1) >> 0;
    l1 = c1 == 0 ? -Infinity : nums1[((c1 - 1) / 2) >> 0];
    r1 = c1 == 2 * m ? Infinity : nums1[(c1 / 2) >> 0];
    l2 = c2 == 0 ? -Infinity : nums2[((c2 - 1) / 2) >> 0];
    r2 = c2 == 2 * n ? Infinity : nums2[(c2 / 2) >> 0];
    
    if (l1 > r2) {
      high = c1 - 1;
    } else if (l2 > r1) {
      low = c1 + 1;
    } else {
      break;
    }
  }
  return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
};

let x = findMedianSortedArrays([1, 2], [3, 4, 5]);
console.log(x);

exports.findMedianSortedArrays = findMedianSortedArrays;