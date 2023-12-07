/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let curr = ''
    for (let i = num.length - 1; i >= 0; i--) {
       if (Number(num[i]) % 2 !== 0) {
           curr = num.slice(0, i + 1)
           break
       } 
    }
    return curr 
};