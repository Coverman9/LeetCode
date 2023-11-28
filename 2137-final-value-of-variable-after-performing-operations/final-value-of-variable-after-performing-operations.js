/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0
    for (let el of operations) {
        if (el.includes('+')) res++
        if (el.includes('-')) res--
    }
    return res
};