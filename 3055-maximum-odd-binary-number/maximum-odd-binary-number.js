/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // if (s.length === 1) return s
    const arr = s.split('').sort((a,b) => b - a)
    let last = arr.lastIndexOf("1")
    let temp = arr[arr.length - 1]
    let temp2 = arr[last]
    arr[arr.length - 1] = temp2
    arr[last] = temp
    return arr.join('')
};