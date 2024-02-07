/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = ''
    let obj = {}
    for (let el of s) {
        if (obj[el]) {
            obj[el]++
        } else {
            obj[el] = 1
        }
    }

    const results = Object.entries(obj).sort((a,b) => b[1] - a[1])
    for (let i = 0; i < results.length; i++) {
        let arr = results[i]
        for (let k = 0; k < arr[1]; k++) {
            res+= arr[0]
        }
    }

    return res
};