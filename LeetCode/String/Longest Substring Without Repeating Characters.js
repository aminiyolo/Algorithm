// Leet Code Algorithm - 2022/08/28 (SUN)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Answer

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = Number.MIN_SAFE_INTEGER;
  let tmp = "";

  if (!s.length) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    if (!tmp.includes(s[i])) {
      tmp = tmp + s[i];
    } else {
      tmp = tmp.slice(tmp.indexOf(s[i]) + 1);
      tmp = tmp + s[i];
    }
    max = Math.max(max, tmp.length);
  }
  return max;
};

// Another Answer

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = Number.MIN_SAFE_INTEGER;
  let tmp = "";

  if (!s.length) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    tmp = tmp.substring(tmp.indexOf(s[i]) + 1);
    tmp = tmp + s[i];
    max = Math.max(max, tmp.length);
  }

  return max;
};
