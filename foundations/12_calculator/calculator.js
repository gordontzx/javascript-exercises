const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(nums) {
    return nums.reduce(add, 0);
};

const multiply = function(nums) {
    return nums.reduce((a, b) => a * b, 1);
};

const power = function(b, e) {
    return b ** e;
};

const factorial = function(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
