const palindromes = function (s) {
    const skip = ",.!?'\" ";
    const t = s.split("").filter(c => !skip.includes(c)).map(c => c.toLowerCase());
    console.log(t);

    for (let l = 0, r = t.length - 1; l < r; l++, r--) {
        if (t[l] !== t[r]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
