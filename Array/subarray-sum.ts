/**
 * Given an array of integers nums and an integer k,
 * return the total number of continuous subarrays whose sum equals to k
 * Example 1: Input: nums = [1,1,1], k = 2. Output: 2
 * Example 2: Input: nums = [1,2,3], k = 3. Output: 2
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    getSum([], null, nums, i, k, results);
  }
  return results.length;
};

function getSum(currentArray, currentSum, nums, index, k, results) {
  const value = nums[index];
  if (currentSum === k) {
    results.push(currentArray);
  }
  if (value === undefined) {
    return;
  }
  currentArray.push(value);
  return getSum(currentArray, (currentSum || 0) + value, nums, index + 1, k, results);
}

console.log(subarraySum([1, 1, 1], 2) === 2);
console.log(subarraySum([1, 2, 3], 2) === 1);
console.log(subarraySum([1], 0) === 0);
console.log(subarraySum([1, -1, 0], 0) === 3);