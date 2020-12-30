//Twój kod

const express = require('express');
const app = express();
let options = [];

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:option', (req, res) => {
  let option = req.params.option;
  let msg = `<h1>Dziękujemy za oddanie głosu</h1><br><a href="/">Wróć</a>`;
  typeof options[option] === 'undefined' ? options[option] = 1 : options[option]++;
  res.send(msg);
});

app.get('/votes/check', (req, res) => {
  let voteResults = '';
  let goBack = `<a href="/">Wróć</a>`
  for (let option in options) {
    let msg = `<h1>${option}: ${options[option]}<h1></br>`;
    voteResults += msg;
  }
  res.send(voteResults + goBack);
});
app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});