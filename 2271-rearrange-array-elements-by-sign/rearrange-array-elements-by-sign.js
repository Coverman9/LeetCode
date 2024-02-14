/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = []
    let neg = []
    let res = []
    for (let el of nums) {
        if (el >= 0) {
            pos.push(el)
        } else {
            neg.push(el)
        }
    }

    for (let i = 0; i < pos.length; i++) {
        res.push(pos[i])
        res.push(neg[i])
    }
    return res
};