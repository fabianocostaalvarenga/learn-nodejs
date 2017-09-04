var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),    
    port = process.env.PORT || 3000,
    routes = require('./api/routes/todoListRouter'),
    database = require('./database');

// add middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// registra o aqruivo de rotas
routes(app); 

app.listen(port);

console.log('ToDo List RESTful API server started on: ' + port);