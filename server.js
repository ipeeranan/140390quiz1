var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});
app.get('/home', function (req, res) {
    res.render('pages/home');
});
app.get('/students', function (req, res) {
    connection.connect();
    connection.query('select * from students', function (err, rows, fields) {
        if (err) throw err
        
        res.render('pages/students',{students:rows})
        console.log('The solution is: ', rows[0].solution)
      })
      connection.end()
});
app.get('/subjects', function (req, res) {
    connection.connect();
    connection.query('select * from subjects', function (err, rows, fields) {
        if (err) throw err
        
        res.render('pages/subjects',{subjects:rows})
        console.log('The solution is: ', rows[0].solution)
      })
      connection.end()
});


console.log('App is running at http://localhost:8080');
app.listen(8080);

