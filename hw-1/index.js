const nestedArray = [1, 2, [3, 4, [5]], 6]

const getSum = (arr) => arr.flat(Infinity).reduce((a, b) => a + b, 0)

console.log(getSum(nestedArray))