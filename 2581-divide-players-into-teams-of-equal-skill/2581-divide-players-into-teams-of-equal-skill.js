/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    // If the number of players is less than or equal to 2, return the product of two players.
    if (skill.length <= 2) {
        return skill[0] * skill[1];
    }

    // Calculate the target sum of skill levels for each pair.
    let totalSum = skill.reduce((sum, value) => sum + value, 0);
    let avg = totalSum / (skill.length / 2);

    // If the total sum cannot be divided equally to form pairs, return -1.
    if (avg % 1 !== 0) return -1;

    // Sort the array to facilitate pairing the lowest and highest skills.
    skill.sort((a, b) => a - b);

    let res = 0;

    // Pair the lowest and highest players and check if they sum to 'avg'.
    for (let i = 0, j = skill.length - 1; i < j; i++, j--) {
        if (skill[i] + skill[j] !== avg) {
            return -1; // If any pair does not sum to avg, return -1.
        }
        res += skill[i] * skill[j]; // Add the product of the pair to the result.
    }

    return res;
};

// Example usage:
console.log(dividePlayers([2, 4, 1, 3])); // Output should be 14
