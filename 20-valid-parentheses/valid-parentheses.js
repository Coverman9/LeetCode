/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let mp = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    for (let char of s) {
        if (char in mp) {
            stack.push(mp[char])
        } else {
            if (stack.pop() !== char) return false
        }
    }
    return stack.length === 0
    
    

    // let obj = {}
    // for (let el of s) {
    //     if (el === '(') {
    //         obj[el] = 1
    //     } else if (el === '{') {
    //         obj[el] = 1
    //     } else if (el === '[') {
    //         obj[el] = 1
    //     }

    //     if (el === ')' && obj['(']) {
    //         obj['(']--
    //     } else if (el === ']' && obj['[']) {
    //         obj['[']--
    //     } else if (el === '}' && obj['{']) {
    //         obj['{']--
    //     }
        
    // }
    // let res = Object.values(obj)
    // for (let tag of res) {
    //     if (tag>0) return false
    // }
    // return true
};