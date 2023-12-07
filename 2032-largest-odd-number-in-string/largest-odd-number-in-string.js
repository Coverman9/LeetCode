/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let curr = ''
    let cycle = 0
    for (let i = num.length - 1; i >= 0; i--) {
       if (Number(num[i]) % 2 !== 0) {
           curr = num.slice(0, num.length - cycle)
           break
       } else {
           cycle++
       }
    }
    return curr 
};