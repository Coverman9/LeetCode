/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let res = 0

    for (let el of hours) {
        if (el >= target) res++
    }

    return res
};