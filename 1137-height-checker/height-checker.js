/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights]
    let sorted = expected.sort((a,b) => a - b)
    let res = 0

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) res++
    }

    return res
};