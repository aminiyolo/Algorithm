// Leet Code Algorithm - 2022/08/16 (Tue)
// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */

// 이 문제는 카데인 알고리즘을 이용하면, O(N)으로 문제를 해결할 수 있다.
// 카데인 알고리즘은 다이내믹 프로그래밍을 적용한 방식이다. 다이내믹 프로그래밍의 핵심은 큰 문제를 작은 문제로 쪼개어 해결하고, 한번 풀었던 문제는 어딘가에 저장해두었다가 반복하여 풀지 않는 것이다.
// 이 문제를 O(N)으로 풀기 위한 핵심은 각각의 최대 부분합은 이전 최대 부분합이 반영된 결과값이라는 것이다.
// Kadane's Algorithm을 식으로 표현하면 => local_maximum[i] = max(A[i], A[i] + local_maximum[i - 1])
// index i의 local_maximum은, A[i]와 A[i]와 그 전 index A[i-1]의 local_maximum의 합 중 더 큰 수를 의미한다.

// Answer
const maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
