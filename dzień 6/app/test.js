const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());

const app2= express();

app2.use(bodyParser.urlencoded());

//przykłady z cookies

app.get('/cookie/set', (req, res) => {
  res.cookie('test', 'Hello, World'); //Ustawi ciastko "test" z zawartością "Hello, World" w przeglądarce użytkownika
  res.send('Ciastko ustawione!');
});

app.get('/cookie/show', (req, res) => {
    const myCookie = req.cookies.test;
    res.send('Ciastko ma wartość: ' + myCookie); //Przeglądarka wyświetli "Ciastko ma wartość: Hello, World" - no chyba, że usunęliśmy ciastko :)
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});

// przykład z formem

app2.use(express.static('./'))

app2.post('/form', (req, res) => {
  const {name, surname} = req.body; //Pamiętasz ten skrótowy zapis z ES6?
  res.send('Więc twierdzisz, że nazywasz się ' + name + ' ' + surname);
});

app2.listen(3001, () => {
  console.log('Serwer uruchomiony na porcie 3001');
});