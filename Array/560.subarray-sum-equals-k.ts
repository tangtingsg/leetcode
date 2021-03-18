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

// console.log(subarraySum([1, 1, 1], 2) === 2);
// console.log(subarraySum([1, 2, 3], 2) === 1);
// console.log(subarraySum([1], 0) === 0);
// console.log(subarraySum([1, -1, 0], 0) === 3);
// console.log(subarraySum([1,2,1,2,1], 3) === 4);
// console.log(subarraySum([0,0,0,0,0,0], 0) === 21);

var subarraySum1 = function(nums, k) {
  const sumArray = [0];
  for(let i = 0; i < nums.length; i++) {
    //前缀和是presum[1]开始填充的
    sumArray[i + 1] = nums[i] + sumArray[i];
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i ; j < nums.length; j++) {
      //注意偏移，因为我们的nums[2]到nums[4]等于presum[5]-presum[2]
      //所以这样就可以得到nums[i,j]区间内的和
      if (sumArray[j + 1] - sumArray[i] === k) {
        count++;
      }
    }
  }
  return count;
}
console.log(subarraySum1([1, 1, 1], 2));


// 求 sum(i, j)的值为k的i，j值
// sum(i, j) = sum(0, j) - sum(0 , i) = k => sum(0, i) = sum(0 , j) - k
var subarraySum2 = function(nums, k) {
  const sumjMap = new Map();
  sumjMap.set(0 , 1)
  let sumj = 0;
  let count = 0;
  for (const num of nums) {
    sumj += num;
    const sumCount = sumjMap.get(sumj) || 0;
    if (sumjMap.has(sumj - k)) {
      count += sumjMap.get(sumj - k);
    }
    sumjMap.set(sumj, sumCount + 1)
  }
  return count;
}

// console.log(subarraySum2([1, 1, 1], 2) === 2);
// console.log(subarraySum2([1, 2, 3], 2) === 1);
// console.log(subarraySum2([1], 0) === 0);
// console.log(subarraySum2([1, -1, 0], 0) === 3);
// console.log(subarraySum2([1, 2, 1, 2, 1], 3) === 4);
// console.log(subarraySum2([0, 0, 0, 0, 0, 0], 0) === 21);
