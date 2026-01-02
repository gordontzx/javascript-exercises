const repeatString = function(s, times) {
    if (times < 0)
        return "ERROR";

    const res = [];
    for (let i = 0; i < times; i++) {
        res.push(s);
    }
    return res.join("");
};

// Do not edit below this line
module.exports = repeatString;
