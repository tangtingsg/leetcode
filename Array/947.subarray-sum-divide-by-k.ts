/**
 * Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.
 * 
 * Example 1:
 * Input: A = [4,5,0,-2,-3,1], K = 5, Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by K = 5:
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

 // O(n*n)
var subarraysDivByK = function(A, K) {
  // sum[i , j] % K === 0 => (sum[0, j] - sum[0, i-1]) % K === 0
  const sumArray = [0];
  for (let i = 0; i < A.length; i++) {
    sumArray[i + 1] = A[i] + sumArray[i];
  }
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if ((sumArray[j + 1] - sumArray[i]) % K === 0) {
        count++;
      }
    }
  }
  return count;
};

// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5) === 7)
// console.log(subarraysDivByK([-1,2,9], 2) === 2)
// console.log(subarraysDivByK([2,-2,2,-4], 6) === 2)

//O(n)
// 假设 (presum[j+1] - presum[i] ) % k == 0；则
// presum[j+1] % k - presum[i] % k == 0;
// presum[j +1] % k = presum[i] % k ;
// presum[j +1] % k 的值 key 是已知的，则是当前的 presum 和 k 的关系，我们只需要知道之前的前缀区间里含有相同余数 （key）的个数。则能够知道当前能够整除 K 的区间个数。
var subarraysDivByK1 = function(A, K) {
  const sumMap = new Map();
  sumMap.set(0, 1);
  let total = 0;
  let preSum = 0
  for (let num of A) {
    preSum += num;
    // const key = preSum % K; 当被除数为负数时取模结果为负数，需要纠正
    const key = (preSum % K + K) % K;
    if(sumMap.has(key)) {
      total += sumMap.get(key);
    }
    const count = sumMap.get(key) || 0
    sumMap.set(key, count + 1);
  }
  return total;
};

console.log(subarraysDivByK1([4,5,0,-2,-3,1], 5) === 7)
console.log(subarraysDivByK1([-1,2,9], 2) === 2)
console.log(subarraysDivByK1([2,-2,2,-4], 6) === 2)