/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function(values) {
    const a = values.flat();

        // Sort the values in ascending order
        a.sort((a, b) => a - b);

        // Calculate the maximum spending
        let ans = 0;
        for (let i = 0; i < a.length; i++) {
            ans += a[i] * (i + 1);
        }

        // Return the maximum spending
        return ans;
};