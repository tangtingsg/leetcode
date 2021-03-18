/**
 * Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.
 *
 * Example 1:
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// O(n * n)
var checkSubarraySum = function(nums, k) {
    const sumArray = [0];
    for (let i = 0; i < nums.length; i++) {
      sumArray[i + 1] = sumArray[i] + nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        if (j - i < 1) {
          continue;
        }
        const sum = sumArray[j + 1] - sumArray[i];
        if ((k === 0 && sum === 0) || sum % k === 0) {
          return true;
        }
      }
    }
    return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
// console.log(checkSubarraySum([23, 2, 4, 6, 7], 11))
// console.log(checkSubarraySum([0 , 0], 0))
// console.log(checkSubarraySum([0 , 1, 0], 0))
// console.log(checkSubarraySum([5, 0, 0], 0))


// sum[i , j] * n = k => (sum[0, j+1] - sum[i]) * n = k,(i !== j)
var checkSubarraySum1 = function(nums, k) {
  const sumMap = new Map();
  sumMap.set(0, -1);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    const key = k === 0 ? preSum : preSum % k;
    if (sumMap.has(key)) {
      if (i - sumMap.get(key) >= 2) {
        return true;
      }
      //因为我们需要保存最小索引，当已经存在时则不用再次存入，不然会更新索引值
      continue;
    }
    sumMap.set(key, i);
  }
  return false
};


// console.log(checkSubarraySum1([23, 2, 4, 6, 7], 6))
// console.log(checkSubarraySum1([23, 2, 4, 6, 7], 11))
// console.log(checkSubarraySum1([0 , 0], 0))
// console.log(checkSubarraySum1([0 , 1, 0], 0))
// console.log(checkSubarraySum1([5, 0, 0], 0))
