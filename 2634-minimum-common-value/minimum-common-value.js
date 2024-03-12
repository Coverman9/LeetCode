/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // if (nums1[nums1.length - 1] < nums2[0]) return -1
    // if (nums2[nums2.length - 1] < nums1[0]) return -1
    // for (let el of nums1) {
    //     if (nums2.includes(el)) {
    //         return el
    //     } 
    // }
    // return -1
    let index1 = 0
    let index2 = 0

    while (index1 < nums1.length && index2 < nums2.length) {
        let num1 = nums1[index1]
        let num2 = nums2[index2]

        if (num1 === num2) return num1
        if (num1 > num2) index2++
        else index1++
    }

    return -1
};