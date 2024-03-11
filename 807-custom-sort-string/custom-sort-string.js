/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let m = new Map();
    for(let i = 0; i < order.length; i++) m.set(order[i], i);
    let a = s.split("");
    a.sort((x, y) => (m.get(x) || 0) - (m.get(y) || 0));
    return a.join("");
};