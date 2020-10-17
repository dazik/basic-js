const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1;
    const time = Math.trunc(turns * 3600 / turnsSpeed);
    return {
        turns: turns,
        seconds: time
    };
};