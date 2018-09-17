var express = require('express');
var app = express();

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/home', function (req, res) {
    res.render('pages/home');
});

app.get('/students', function (req, res) {
    res.render('pages/students');
});
app.get('/subject', function (req, res) {
    res.render('pages/subject');
});


console.log('App is running at http://localhost:8080');
app.listen(8080);