const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (isNaN(Date.parse(date))) throw Error;
    const checkdate = new Date(Date.parse(date));
    if (checkdate.getDay() != date.getDay()) throw Error;
    const month = date.getMonth();
    switch (true) {
        case (month < 2) || (month === 11):
            return 'winter';
        case (month < 5) && (month > 1):
            return 'spring';
        case (month < 8) && (month > 4):
            return 'summer';
        case (month < 11) && (month > 7):
            return 'fall';
    }
};