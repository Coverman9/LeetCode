/**
 * @param {string[]} nums
 * @return {string}
 */

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
 
var findDifferentBinaryString = function(nums) {
    let decArr = []
    for (let el of nums) {
        decArr.push(parseInt(el, 2))
    }

    let numLen = nums[0].length
    let maxNum = "1".repeat(numLen)
    let max = parseInt(maxNum, 2)
    for (let i = 0; i <= max; i++) {
        if (!decArr.includes(i)) {
            let decLen = dec2bin(i).length
            if (decLen === numLen) {
                return dec2bin(i)
            } else {
                return `${'0'.repeat(numLen - decLen)}${dec2bin(i)}`
            }
        } 
    }
};

