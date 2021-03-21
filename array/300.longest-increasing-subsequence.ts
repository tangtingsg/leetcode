/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * 
 * Example 1: Input: nums = [10,9,2,5,3,7,101,18],Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 * 
 * Example 2: Input: nums = [0,1,0,3,2,3]. Output: 4. [0, 1, 2, 3]
 * 
 * Example 3: Input: nums = [7,7,7,7,7,7,7], Output: 1
 * 
 * @param {number[]} nums
 * @return {number}
 */

/** 
 * dp[i] = max(dp[j])+1,其中0≤j<i且num[j]<num[i]
 * 即考虑往dp[0,...,i−1] 中最长的上升子序列后面再加一个nums[i]。由于 dp[j]代表 nums[0…j]中以nums[j]结尾的最长上升子序列
 * 所以如果能从dp[j]这个状态转移过来，那么nums[i]必然要大于 nums[j]，才能将nums[i] 放在 nums[j] 后面以形成更长的上升子序列。
* */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18,5])) // dp = [ 1, 1, 1, 2, 2, 3, 4, 4, 3 ]
console.log(lengthOfLIS([0,1,0,3,2,3,2])) // dp = [ 1, 2, 1, 3, 3, 4, 3]

