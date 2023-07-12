/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    if (strs.length === 1) {
        return strs.join('')
    }
    
    if (!strs.length) return ''
       
        for (let j = 0; j < strs[0].length; j++) {
            let char = strs[0][j]
            if (strs.every(word => word[j] === char)) {
                res += char
            } else {
                break;
            }
        
    }
    return res
};