//Twój kod

const express = require('express');
const app = express();
const style = 'color: yellow; margin-top: 50px; text-align:center; border: 1px solid black; background-color: blue;';
let name;

app.get('/name/set/:imie', (req, res) => {
  name = req.params.imie;
  let response = `<h1 style='${style}'>${name}<h1></h1>`
  res.send(response);
});

app.get('/name/show', (req, res) => {
  let information = name !== undefined ? `You set name: ${name}` : 'Please set name first';
  let response = `<h1 style='${style}'>${information}<h1>`
  res.send(response);
});

app.get('/name/check', (req, res) => {
  let information = name !== undefined ? 'Name saved' : 'Name not saved';
  let response = `<h1 style='${style}'>${information}<h1>`
  res.send(response);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});