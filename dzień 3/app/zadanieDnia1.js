//Twój kod
const fs = require('fs');
const crypto = require('crypto');

const pathToTextFile = './data/zadanieDnia1/testFile.txt';

function hashFunc(pathToFile) {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if (err === null) {
      console.log(data)
      const hash = crypto.createHmac('sha256', data).digest('hex');
      console.log(hash)
    }
    else {
      console.log(err)
    }
  })
};


hashFunc(pathToTextFile)