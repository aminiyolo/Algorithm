// Leet Code Algorithm - 2022/08/28 (SUN)
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Answer1
const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    const leftVal = nums[left];
    const midVal = nums[mid];
    const leftOfMid = nums[mid - 1];
    const rightOfMid = nums[mid + 1];

    if (midVal > rightOfMid) {
      return rightOfMid;
    } else if (leftOfMid > midVal) {
      return midVal;
    }

    if (midVal > leftVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

// Answer2
const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[right] >= nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};