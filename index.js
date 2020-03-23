const CryptoJS = require("crypto-js");

// master key
const masterKey = "ASECRET";
const passwordInputted = "PASSWORD";

// (en)crypt
var cipher = CryptoJS.AES.encrypt(passwordInputted, masterKey);
cipher = cipher.toString();
console.log(cipher);

// (de)crypt
var decipher = CryptoJS.AES.decrypt(cipher, masterKey);
decipher = decipher.toString(CryptoJS.enc.Utf8);
console.log(decipher);