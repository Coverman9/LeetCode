/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (fn(num, i)) {
            res.push(num)
        }
    }
    return res
};