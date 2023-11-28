/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies) 
    let res = []

    for (let el of candies) {
        if (el + extraCandies >= max){    
            res.push(true)
        } else {
            res.push(false)
        }
    }

    return res
};