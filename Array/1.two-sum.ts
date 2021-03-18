/*
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
*You can return the answer in any order.
* Example 1: Input: nums = [2,7,11,15], target = 9, Output: [0,1]
* Example 2: Input: nums = [3,2,4], target = 6, Output: [1,2]
*/

function twoSum(nums, target) {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const indexs = indexMap.get(nums[i]) || [];
    indexs.push(i);
    indexMap.set(nums[i], indexs);
  }
  console.log(indexMap)
  for (let i = 0; i < nums.length; i++) {
    const indexs = indexMap.get(target - nums[i]);
    if (indexs) {
      for (const index of indexs) {
        if (index !== i) {
          return [i, index];
        }
      }
    }
  }
  return [-1, -1];
};

function twoSum1(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target- num), i]
    }
    map.set(num, i);
  }
};

console.log(twoSum1([2,7,11,15], 9))
console.log(twoSum1([3,2,4], 6))
console.log(twoSum1([3,2,3], 6))
