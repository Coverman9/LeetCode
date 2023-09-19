/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let litres = 0
    while (left < right) {
        litres = Math.max(litres, Math.min(height[left], height[right]) * (right - left))
        height[left] < height[right] ? left++ : right--
    }
    return litres

};