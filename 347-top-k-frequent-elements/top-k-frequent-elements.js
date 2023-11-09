/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    let arr = []
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]]) {
        obj[nums[i]]++
      } else {
        obj[nums[i]] = 1
      }
    }
    let sorted = Object.entries(obj)
    sorted.sort(function(a, b) {
    return b[1] - a[1];
    });
    while (arr.length < k) {
      arr.push(sorted.shift()[0])
    }


    
    return arr
};