/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = digits.join('')
    console.log(res)
    res = BigInt(res) + BigInt(1)
    console.log(res)
    return res.toString().split('')
}