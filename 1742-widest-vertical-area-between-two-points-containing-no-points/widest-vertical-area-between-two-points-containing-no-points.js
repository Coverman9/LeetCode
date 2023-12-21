/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let xpoints = points.map(el => el[0]).sort((a,b) => a - b)
    let res = 0
    for (let i = 1; i < xpoints.length; i++) {
        if (xpoints[i] - xpoints[i - 1] > res) res = xpoints[i] - xpoints[i - 1]
    }
    return res
};