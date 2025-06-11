const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const logger = require('./middleware/logger');
const { errorHandler, notFound } = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger);

app.use('/api', routes);

app.use(notFound);

app.use(errorHandler);

module.exports = app; 
