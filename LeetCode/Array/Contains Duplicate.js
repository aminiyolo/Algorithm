// Leet Code Algorithm - 2022/08/15 (MON)
// https://leetcode.com/problems/contains-duplicate/submissions/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Answer 1
const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const idx = nums.indexOf(nums[i]);
    if (idx !== i) {
      return true;
    }
  }
  return false;
};

// Answer 2
const containsDuplicate = function (nums) {
  let obj = {};
  for (let x of nums) {
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      return true;
    }
  }
  return false;
};
