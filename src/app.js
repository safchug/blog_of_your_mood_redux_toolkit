const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.use(errorHandler);

module.exports = app;