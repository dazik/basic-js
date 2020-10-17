const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    if (Array.isArray(members)) {
        let result = '';
        for (let i = 0; i < members.length; i++) {
            if (typeof(members[i]) === 'string') {
                result = result + /[a-zA-Z]/.exec(members[i]);
            }
        }
        result = result.toUpperCase().split('').sort().join('');
        return result;
    } else {
        return false;
    }
};