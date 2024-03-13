/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
     for (let i = 1; i <= n; i++) {
        let leftOfPivot = i * (i + 1) / 2
        let rightOfPivot = n * (n + 1) / 2 - leftOfPivot + i
        if (leftOfPivot === rightOfPivot) return i
    }

    return -1
};