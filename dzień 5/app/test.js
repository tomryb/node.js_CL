const express = require('express');

const app = express();

// przykład1

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//przykład 2

app.get('/contact', (req, res) => { //np. localhost:3000/contact
  res.send('Zapraszam do kontaktu: ja@domena.pl!');
});

//przykład3

app.get('/hello/:myname/:localization', (req, res) => { //np. localhost:3000/hello/Barabaszu/Kluczborka
  const name = req.params.myname;
  const local = req.params.localization;
  res.send('Witaj, ' + name + ' z ' + local);
});

//przykład4

app.use(express.static('./public/przykladStatyczne/'));

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});