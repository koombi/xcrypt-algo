const Xcrypter = require("./Xcrypter");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your master key? ', (masterKey) => {
  const xcrypter = new Xcrypter(masterKey);

  readline.question(`Encrypt (1) Or Decrypt (2)? `, (choice) => {
    if (choice === "1") {
      readline.question(`Password? `, (password) => {
        console.log(xcrypter.encrypt(password));
        readline.close();
      });
      return;
    }

    if (choice === "2") {
      readline.question(`Encrypted string? `, (cipher) => {
        console.log(xcrypter.decrypt(cipher));
        readline.close();
      });
      return;
    }

    console.log("Wrong choice!");
    readline.close();
  });
});
