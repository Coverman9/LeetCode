/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = []
    let curr = ''
    for (let i = 0; i < num.length; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            curr += num[i] + num[i + 1] + num[i + 2]
        }
        if (curr.length === 3) {
            res.push(Number(curr))
            curr = ''
        }
    }
    return res.length ? Math.max(...res).toString().padStart(3, '0') : ''
};