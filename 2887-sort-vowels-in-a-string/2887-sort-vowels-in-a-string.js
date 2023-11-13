/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = 'aeoui'
    let res = ''
    let vowl = ''
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowl += s[i]
        }
    }
    
    let sortedVowl = vowl.split('').sort((a,b) => {
        return a.charCodeAt(0) - b.charCodeAt(0)
    })
    let indx = 0
    for (let el of s) {
        if (vowels.includes(el.toLowerCase())) {
            res += sortedVowl[indx]
            indx++
        } else {
            res += el
        }
    }

    return res
};