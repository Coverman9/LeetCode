/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */

var garbageCollection = function(garbage, travel) {
    let sum = 0;
    let mul = 0;
    let p = 0;
    let g = 0;
    let m = 0;

    for (let i = garbage.length - 1; i > 0; i--) {
        sum += garbage[i].length;

        if (mul < 3) {
            for (let j = 0; j < garbage[i].length; j++) {
                const ch = garbage[i][j];
                switch (ch) {
                    case 'P':
                        mul = p === 0 ? mul + 1 : mul;
                        p++;
                        break;
                    case 'G':
                        mul = g === 0 ? mul + 1 : mul;
                        g++;
                        break;
                    case 'M':
                        mul = m === 0 ? mul + 1 : mul;
                        m++;
                        break;
                    default:
                        break;
                }
            }
        }

        sum += mul * travel[i - 1];
    }

    sum += garbage[0].length;
    return sum;
};