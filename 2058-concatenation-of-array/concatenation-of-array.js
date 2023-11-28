/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let copy = [...nums]
    return [...nums, ...copy]
};