/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = s.split('')
    let word = ''
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const nums = ["0", '1', '2', '3', '4', '5', '6', '7', '8', '9']
    res.forEach(el => alphabet.includes(el.toUpperCase()) || nums.includes(el) 
    ? word += el.toLowerCase()
    : null )
    console.log(word)
    console.log(+" ")
    return word === word.split('').reverse().join('')
};