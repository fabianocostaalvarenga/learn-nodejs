'use strict';

var mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel');

// Instancia e conecta no mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');