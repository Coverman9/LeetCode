/**
 * @param {number[]} nums
 * @return {number}
 */
const numReverser = (num) => {
    let numStr = num.toString()
    let newNum = numStr.split('').reverse().join('')
    return parseInt(newNum)
}
var countNicePairs = function(nums) {
    let obj = {}
    let res = 0 
    
    for (let n of nums) {
        const r = numReverser(n);
        cur = obj[n - r] || 0;
        res += cur;
        obj[n - r] = 1 + cur;
    }
    return res % (10**9 + 7); 
}

// var countNicePairs = function(nums) {
//     let obj = {}
//     let res =  0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//             //console.log(nums[i], nums[j])
//                 if (obj[nums[i] + numReverser(nums[j])]) {
//                     obj[nums[i] + numReverser(nums[j])]++
//                 } else {
//                     obj[nums[i] + numReverser(nums[j])] = 1
//                 }
//             }
            
//         }
//     }

//     for (let key in obj) {
//         if (obj[key] >= 2) {
//             res += Math.floor(obj[key] / 2)
//         }
//     }

//     return res
// };