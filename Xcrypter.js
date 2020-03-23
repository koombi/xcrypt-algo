const CryptoJS = require("crypto-js");

class Xcrypter {
  constructor(masterKey) {
    this.masterKey = masterKey;
  }

  encrypt(password) {
    const cipher = CryptoJS.AES.encrypt(password, this.masterKey);
    return cipher.toString();
  }

  decrypt(cipher) {
    const decipher = CryptoJS.AES.decrypt(cipher, this.masterKey);
    return decipher.toString(CryptoJS.enc.Utf8);
  }
}

module.exports = Xcrypter;