var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('public'));

app.use('/json', express.static(__dirname + '/JSON'));
var port = process.env.PORT || 8080;
var server = app.listen(port);
console.log("Listening...");



