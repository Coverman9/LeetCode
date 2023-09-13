/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let left = 0
    let right = str.length - 1
    while(left < right) {
        console.log(str[left], str[right])
        if (str[left] !== str[right]) {
            return false
        } else {
            left++
            right--
        }
    }
    return true
};