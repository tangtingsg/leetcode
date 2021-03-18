/**
 * Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
 * Return the number of nice sub-arrays.

 * Example 1:
 * Input: nums = [1,1,2,1,1], k = 3, Output: 2
 * Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  if (!nums.length) {
    return 0;
  }
  const subOddMap = new Map();
  subOddMap.set(0, 1);
  let oddSum= 0;
  let totalCount = 0
  for (let num of nums) {
    if (num % 2 !== 0) {
      oddSum++;
    }
    if (subOddMap.has(oddSum - k)) {
      totalCount += subOddMap.get(oddSum - k);
    }
    const oddCount = (subOddMap.get(oddSum) || 0) + 1;
    subOddMap.set(oddSum, oddCount);
  }
  return totalCount;
};
console.log(numberOfSubarrays([1,1,2,1,1], 3) === 2)
console.log(numberOfSubarrays([2,4,6], 1) === 0)
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2) === 16)