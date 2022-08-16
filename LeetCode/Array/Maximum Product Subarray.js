// Leet Code Algorithm - 2022/08/16 (Tue)
// https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Answer
/**
 * @param {number[]} nums
 * @return {number}
 */

// 배열의 요소 중 음수가 포함되어 있을 수도 있기 때문에, 최대값 뿐만 아니라, 최소값도 저장해놔야 한다.
// 왜냐하면, 음수 곱하기 음수는 양수가 되기 때문이다. 이러한 경우에, 기존 양수 최대값보다 값이 커질 수 있다.
// 2번째 인덱스부터 순회하면서 최댓값을 비교를 하는데 3가지를 비교해야한다.
// 1. 이전 최댓값에 현재 요소를 곱한 값
// 2. 이전 최솟값에 현재 요소를 곱한 값
// 3. 현재 요소

const maxProduct = function (nums) {
  let prevMaxNum = nums[0]; // 최솟값
  let prevMinNum = nums[0]; // 최댓값
  let max = nums[0]; // 최대 결과값

  for (let i = 1; i < nums.length; i += 1) {
    const currMaxNum = Math.max(
      prevMaxNum * nums[i],
      prevMinNum * nums[i],
      nums[i],
    );
    const currMinNum = Math.min(
      prevMaxNum * nums[i],
      prevMinNum * nums[i],
      nums[i],
    );

    prevMaxNum = currMaxNum;
    prevMinNum = currMinNum;

    max = Math.max(currMaxNum, max);
  }

  return max;
};
