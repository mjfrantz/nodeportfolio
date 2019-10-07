const express = require('express');
const morgan = require('morgan');
const portfolioRouter = require('./routes/portfolioRoutes');
const cors = require('cors');


const app = express();

app.use(express.json());

app.use(cors());

//Middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    console.log('Hello from Middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//Mounting the Router 
app.use('/api/v1/portfolios', portfolioRouter);

module.exports = app;