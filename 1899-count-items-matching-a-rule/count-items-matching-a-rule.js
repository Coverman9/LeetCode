/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let res = 0
    let key = 0
    ruleKey === 'color' ? key = 1 : ruleKey === 'name' ? key = 2 : key = 0
    for (let el of items) {
        if (el[key] === ruleValue) res++
    }
    return res
};