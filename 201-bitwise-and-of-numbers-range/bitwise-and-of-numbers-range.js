/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function msbPos(n) {

    let msb_p = -1;
    while (n > 0) {
        n = n >> 1;
        msb_p++;
    }

    return msb_p;
}
var rangeBitwiseAnd = function (x, y) {
    let res = 0; // Initialize result 

    while (x > 0 && y > 0) {

        // Find positions of MSB in x and y 
        let msb_p1 = msbPos(x);
        let msb_p2 = msbPos(y);

        // If positions are not same, return 
        if (msb_p1 != msb_p2)
            break;

        // Add 2^msb_p1 to result 
        let msb_val = (1 << msb_p1);
        res = res + msb_val;

        // subtract 2^msb_p1 from x and y. 
        x = x - msb_val;
        y = y - msb_val;
    }

    return res;
};
