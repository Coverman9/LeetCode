/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let res = 0

    for (let el of details) {
        if ((el[el.length - 4] + el[el.length - 3]) > 60) res++
    }

    return res
};