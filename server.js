var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://nkwnjxuiidwrns:b72b4de42f726173c9acee8a85dd10ed1c8dc1a2ab7402a6feebbbccb8b14f85@ec2-54-163-245-44.compute-1.amazonaws.com:5432/d34ii1v5fr4h1e?ssl=true');

var app = express();

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});