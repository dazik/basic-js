const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let mod_arr = [];
        if (arr.length === 0) return [];
        //console.log(mod_arr);
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    i++;
                    break;
                case '--discard-prev':
                    mod_arr.pop();
                    break;
                case '--double-next':
                    if (arr[i + 1] != undefined) {
                        mod_arr.push(arr[i + 1]);
                    };
                    break;
                case '--double-prev':
                    if (arr[i - 1] != undefined) {
                        mod_arr.push(arr[i - 1]);
                    }
                    break;
                default:
                    mod_arr.push(arr[i]);
                    break;
            };
        };
        return mod_arr;
    } else throw Error;
};