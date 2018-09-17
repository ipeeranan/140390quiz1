var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc12345',
  database : 'db140390'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});

app.get('/students', function (req, res) {
    res.render('pages/students');
});
app.get('/subject', function (req, res) {
    res.render('pages/subject');
});
connection.end()

console.log('App is running at http://localhost:8080');
app.listen(8080);