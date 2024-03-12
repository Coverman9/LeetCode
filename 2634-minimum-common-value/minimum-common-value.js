/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    if (nums1[nums1.length - 1] < nums2[0]) return -1
    if (nums2[nums2.length - 1] < nums1[0]) return -1
    for (let el of nums1) {
        if (nums2.includes(el)) {
            return el
        } 
    }
    return -1
};