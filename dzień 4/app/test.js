const http = require('http');


//przykład 1

const srv = http.createServer((req, res) => {
  console.log('Ktoś puka do drzwi back-endu!');
  //przykład2
  const acceptLanguage = req.headers['accept-language'];
  console.log('Preferowane języki:', acceptLanguage);
});
srv.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
