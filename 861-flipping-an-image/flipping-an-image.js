/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let newArr = image.map(arr => arr.reverse())
    return newArr.map(arr => arr.map(el => el === 1 ? el = 0 : el = 1))
};