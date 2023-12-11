/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
   let obj = {}
   for (let el of arr) {
       obj[el] ? obj[el]++ : obj[el] = 1
   } 
   let res = ''
   let max = 0
   for (let key in obj) {
       if (obj[key] > max) {
           max = obj[key]
           res = key
       }
   }

   return res
};