const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    encrypt(message, key) {
        let resArray = [],
            keyCounter = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let msgArray = message.split(''),
            keyArray = key.split('');
        while (keyArray.length < msgArray.length) {
            keyArray = keyArray.concat(keyArray);
        }
        for (let i = 0; i < msgArray.length; i++) {
            if (msgArray[i].charCodeAt() < 91 && msgArray[i].charCodeAt() > 64) {
                let charCode = msgArray[i].charCodeAt() + keyArray[keyCounter].charCodeAt() - 65;
                if (charCode > 90) {
                    charCode = charCode - 26;
                }
                resArray.push(String.fromCharCode(charCode));
                keyCounter++;
            } else {
                resArray.push(msgArray[i]);
            }

        }
        if (this.mode === false) {
            resArray = resArray.reverse();
        }
        return resArray.join('');
    }
    decrypt(message, key) {
        let resArray = [],
            keyCounter = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let msgArray = message.split(''),
            keyArray = key.split('');
        while (keyArray.length < msgArray.length) {
            keyArray = keyArray.concat(keyArray);
        }
        for (let i = 0; i < msgArray.length; i++) {
            if (msgArray[i].charCodeAt() < 91 && msgArray[i].charCodeAt() > 64) {
                let charCode = msgArray[i].charCodeAt() - keyArray[keyCounter].charCodeAt() + 65;
                if (charCode < 65) {
                    charCode = charCode + 26;
                }
                resArray.push(String.fromCharCode(charCode));
                keyCounter++;
            } else {
                resArray.push(msgArray[i]);
            }

        }
        if (this.mode === false) {
            resArray = resArray.reverse();
        }
        return resArray.join('');

    }
}

module.exports = VigenereCipheringMachine;