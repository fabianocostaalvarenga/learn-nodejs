'strict mode';

const express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(expressLayouts);
app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;