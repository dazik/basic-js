const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
    let sum = 0;
    for (i = 0, i < array.length; i++) {
        for (k = 0; k < array[i].length; k++) {
            if (array[i][k] = '^^') {
                sum += 1;
            }
        }
    }
    return sum;
};