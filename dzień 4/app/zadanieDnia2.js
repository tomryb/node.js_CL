//Twój kod
const http = require('http');
const srv = http.createServer((req, res) => {
  const msg = `<h1 style='text-align:center; color:blue;'>Hello, World from back-end!</h1>
<p><strong>Preferowane języki:</strong> ${req.headers['accept-language']}</p>
<p><strong>User-agent:</strong> ${req.headers['user-agent']}</p>`
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(msg);
});


srv.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});