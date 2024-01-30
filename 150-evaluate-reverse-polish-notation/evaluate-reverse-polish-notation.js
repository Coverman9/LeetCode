/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let op = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => Math.trunc(a/b),
    }
    for (let el of tokens) {
        if (op[el]) {
            let top = stack.pop()
            let second = stack.pop()
            stack.push(op[el](second, top))
        } else {
            stack.push(+el)
        }
    }
    return stack
};