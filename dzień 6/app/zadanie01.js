//Twój kod

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie01/'));

app.post('/result', (req, res) => {
    const {numberA, numberB} = req.body;
    let response = '';
    if (parseInt(numberA) % parseInt(numberB) === 0) {
      response = `Cyganka mówi, że liczba ${numberB} jest dzielnikiem liczby ${numberA}`;
    } else {
      response = `Cyganka mówi, że liczba ${numberB} nie jest dzielnikiem liczby ${numberA}`;
    }
    let msg = `<h1>${response}</h1>`
    res.send(msg);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});