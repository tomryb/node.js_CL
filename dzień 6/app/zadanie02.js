//Twój kod

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(express.static('./public/zadanie02/'));

app.post('/cookie/set', (req, res) => {
  const {name} = req.body;
  res.cookie('nameSaved', name, {
      maxAge : 321321321,
  });
  res.send(`Wrzucono do naczynia kartkę z imieniem: ${name}`);
});

app.get('/cookie/show', (req, res) => {
  res.send(`Kartka z imieniem w naczyniu: ${req.cookies.nameSaved}`);
});

app.get('/cookie/check', (req, res) => {
  let information = req.cookies.nameSaved === undefined ? 'Nie wrzucono kartki z imieniem do naczynia.' : 'Kartka z imieniem znajduje się w naczyniu.';
  res.send(information);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});