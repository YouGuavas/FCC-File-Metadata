// server.js
// where your node app starts

// init project
const express = require('express');
const multer = require('multer');
const upload = multer({dest:'uploads/'}).single('avatar');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
// http://expressjs.com/en/starter/static-files.html
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('index');
});
app.post("/upload", upload, (req, res) => {
  res.json({fileSize: req.file.size});
});
app.get("*", (req, res) => {
  res.json(req.headers)
});

// listen for requests :)
const listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});