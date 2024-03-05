/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] != s[r])
            break;

        const left = s[l];
        const right = s[r];

        while (s[r] == left)
            r--;

        while (s[l] == right)
            l++;

    }

    return r + 1 - l > 0 ? r + 1 - l : 0;
};