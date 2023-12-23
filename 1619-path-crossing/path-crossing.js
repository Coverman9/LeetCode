/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let set = new Set()
    let start = [0, 0]
    let currentPosition = start.toString();
    set.add(currentPosition)
    for (let el of path) {
        if (el === 'N') {
            start[1]++
        } else if (el === 'S') {
            start[1]--
        } else if (el === 'W') {
            start[0]--
        } else if (el === 'E') {
            start[0]++
        }
        currentPosition = start.toString()
        if (set.has(currentPosition)) {
            return true; 
        } else {
            set.add(currentPosition);
        }
        
    }
    return false
};