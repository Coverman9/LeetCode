/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let zigzag = [];
    for (let i = 0; i < numRows; i++) {
        zigzag[i] = [];
    }
    
    let row = 0;
    let direction = 1; // 1 represents downward, -1 represents upward

    for (let i = 0; i < s.length; i++) {
        zigzag[row].push(s[i]);

        if (row === 0) {
            direction = 1; // Change direction to downward when reaching the top row
        } else if (row === numRows - 1) {
            direction = -1; // Change direction to upward when reaching the bottom row
        }

        row += direction;
    }

    return zigzag.flat().join('')
};