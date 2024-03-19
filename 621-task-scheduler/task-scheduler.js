/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    var count = {}
    var longest = 0

    // count each task and find longest one
    for (let c of tasks) {
        if (count[c] == null) count[c] = 0
        count[c]++
        longest = Math.max(longest, count[c])
    }

    var longestCount = 0
    // count how many tasks which have longest.
    for (let c in count) {
        if (count[c] == longest) longestCount++
    }

    return Math.max((n + 1) * (longest - 1) + longestCount, tasks.length)
};