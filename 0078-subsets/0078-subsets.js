/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	let res=[]                    // the final arr, which we will display
	let auxArr = [], i=0             // global vars
    
    function recur(nums,i,auxArr){
        if(i==nums.length) { res.push(auxArr); return } 
    
        recur(nums, i+1, [...auxArr, nums[i] ] ) //or, we can use 'aux.concat(nums[i])'
		
		// dont take
        recur(nums, i+1, auxArr)
    
    }
    
    recur(nums,i,auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr
    
    
};