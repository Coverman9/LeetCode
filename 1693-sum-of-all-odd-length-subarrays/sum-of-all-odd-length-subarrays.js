/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let i=1;
    let sum=0;
    while(i<=arr.length){
        for(let j=0;j<=arr.length-i;j++){
             for(let k=j;k<i+j;k++){
                sum+=arr[k]
             }
        }
        i+=2
    }
    return sum       
};