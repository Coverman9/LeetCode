/**
 * @param {string[]} bank
 * @return {number}
 */
const countOnes = (str) => {
    let res = 0
    for (let el of str) {
        if (el === '1') res++
    }
    return res
} 
var numberOfBeams = function(bank) {
    let res = 0
    let newBank = bank.filter(el => el.includes('1'))
    for (let i = 0; i < newBank.length-1; i++) {
        res += countOnes(newBank[i]) * countOnes(newBank[i+1])
    }
    return res
};