//Twój kod

const fs = require('fs');

const filePath = process.argv[2];
const outputPath = './data/zadanieDnia/output.txt'


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err === null) {
        let newText = "";
        for (let i in data) {
            newText += (i % 2 === 0) ? data[i].toUpperCase() : data[i].toLowerCase();
          }
        fs.writeFile(outputPath, newText, err => {
            if (err === null) {
                console.log('Poprawnie zapisano plik');
            }
            else {
                console.log('Błąd podczas zapisu pliku', err);
              }
        })
    }
    else {
        console.log('Błąd podczas odczytu pliku', err);
      }
})