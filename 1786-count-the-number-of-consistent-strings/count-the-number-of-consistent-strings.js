/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) =>
    words.filter(
        word => [...word].every(letter => allowed.includes(letter))
    ).length