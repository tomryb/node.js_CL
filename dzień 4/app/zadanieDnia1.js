//Twój kod

const http = require('http');

const srv = http.createServer((req, res) => {
  const header = "<h1 style='text-align:center; color:blue;'>Hello, World from back-end!</h1>"
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(header);
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});