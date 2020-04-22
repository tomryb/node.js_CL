//Twój kod

const fs = require('fs');
const inputFile = './data/zadanie01/input.json';
const outputFile = './data/zadanie01/sum.txt'

fs.readFile(inputFile, "utf8", (err, data) => {
    if (err === null) {
        const sum = JSON.parse(data).reduce((prev, next) => prev + next);
        fs.writeFile(outputFile, sum, err => {
            if (err === null) {
                console.log('Poprawnie odczytano i zapisano pliki. Suma wynosi:', sum)
            }
            else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        })
    }
    else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});