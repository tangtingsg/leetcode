/**
 * Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * Example 1: Input: numbers = [2,7,11,15], target = 9, Output: [1,2]. Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSumSortedArray(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target- num) + 1, i + 1]
    }
    map.set(num, i);
  }
  return [];
};

console.log(twoSumSortedArray([2,7,11,15], 9))
console.log(twoSumSortedArray([-1, 0], -1))


function twoSumSortedArray1(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left + 1, right + 1];
    }
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};

console.log(twoSumSortedArray([2,7,11,15], 9))
console.log(twoSumSortedArray([-1, 0], -1))
