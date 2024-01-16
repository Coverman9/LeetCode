/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let res = ''
    for (let el of s) {
        if (el === 'i') {
            res = res.split('').reverse().join('')
        } else {
            res += el
        }
    }

    return res
};