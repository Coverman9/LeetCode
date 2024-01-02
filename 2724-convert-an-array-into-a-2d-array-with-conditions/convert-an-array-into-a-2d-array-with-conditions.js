/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  let res = []
  const countMap = new Map();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
  
  while (countMap.size > 0) {
      let temp = []
      for (const [key, count] of countMap) {
          temp.push(key)
          countMap.set(key, count - 1)
          if (countMap.get(key) === 0) {
              countMap.delete(key)
          }
      }
      res.push(temp)
  }
  return res
};