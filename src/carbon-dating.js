const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (Number.isNaN(parseFloat(sampleActivity)) || typeof(sampleActivity) !== 'string') return false;
    if (parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0) return false;
    return (Math.log(15 / sampleActivity) * 10000) / 1.22;
};