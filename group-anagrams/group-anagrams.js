/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    let obj = {}

    strs.forEach(word => {
        let res = word.split('').sort().join('')

        if (obj[res]) {
            obj[res].push(word)
        } else {
            obj[res] = [word]
        }   
    })


    return Object.values(obj)
};