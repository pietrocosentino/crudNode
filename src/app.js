'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Room = require('./models/room');
const User = require('./models/user');
const Schedule = require('./models/schedule');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const roomtRoute = require('./routes/room-route');
const userRoute = require('./routes/user-route');
const scheduleRoute = require('./routes/schedule-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/room', roomRoute);
app.use('/user', userRoute);
app.use('/schedule', scheduleRoute);

module.exports = app;