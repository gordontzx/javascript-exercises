const round = (num, dp) => {
    return Math.round(num * 10**dp) / 10**dp;
}

const convertToCelsius = function(temp) {
    const converted = (temp - 32) * 5 / 9;
    return round(converted, 1);
};

const convertToFahrenheit = function(temp) {
    const converted = (temp * 9 / 5) + 32;
    return round(converted, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
