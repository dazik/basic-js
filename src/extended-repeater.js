const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    let result = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        let addition = '';
        if (options.additionRepeatTimes !== undefined && options.addition !== undefined) {
            for (let j = 0; j < options.additionRepeatTimes; j++) {
                if (j === (options.additionRepeatTimes - 1)) {
                    addition = addition + options.addition;
                } else {
                    addition = addition + options.addition + options.additionSeparator;
                }
            }
        }
        result.push(str + addition);
    }
    return result.join(options.separator);

};