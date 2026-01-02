const removeFromArray = function(arr, ...toRemove) {
    toRemove = new Set(toRemove);
    const res = [];
    for (const num of arr) {
        if (!toRemove.has(num)) {
            res.push(num);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
