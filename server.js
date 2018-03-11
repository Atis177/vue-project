var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var jsonPort = Number(process.env.PORT || 3004);
server.use(middlewares);
server.use(router);
server.listen(jsonPort, function () {
    console.log('JSON Server is running')
});