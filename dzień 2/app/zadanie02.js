//Twój kod

const fs = require('fs');
const path = './data/zadanie02/';

fs.readdir(path, (err, files) => {
    if (err === null) {
        files.forEach(file => {
            fs.readFile(path + file, 'utf8', (err, data) => {
                if (err === null) {
                    console.log(data)
                }
                else {
                    console.log('Błąd podczas wyświetlania zawartości pliku', err);
                }
            })
        })
    }
    else {
        console.log('Błąd podczas wyświetlania zawartości katalogu', err);
    }
})