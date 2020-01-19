const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const cors = require('cors');

const rutasSeguras = require('./routes/rutas-seguras');
const users = require('./routes/user');

const {getLogger, logHandler, terminate} = require('@jwt/utils');
require('./config/passport')(passport);

const app = express();
const log = getLogger(__dirname, __filename)
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logHandler);

app.use('/api/users', users);
app.use('/api', passport.authenticate('jwt', {session: false}), rutasSeguras);

app.disable('etag');
app.disable('x-powered-by');

app.listen(PORT, () => {log.info('Start');});

app.get('/', (req, res) => 
{
    res.send('Hello Word');
});