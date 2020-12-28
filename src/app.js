const express = require('express');
const userRouter = require('./routes/user');
const errorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use('/api', userRouter);

app.use(errorHandler);

module.exports = app;