//Twój kod

const express = require('express');
const app = express();

app.get('/numbers/:number1/:number2', (req, res) => {
  const number1 = parseInt(req.params.number1);
  const number2 = parseInt(req.params.number2);
  const sum = number1 + number2;
  const response = `<h1 style='color: yellow; margin-top: 50px; text-align:center; border: 1px solid black; background-color: blue;'>${number1} + ${number2} = ${sum}<h1>`
  res.send(response);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});