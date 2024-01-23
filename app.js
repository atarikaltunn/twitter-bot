/* eslint-disable indent */
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser')
const path = require('path');

const route = require('./routes/routes');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(`${__dirname}/views`));

// Middlewares
app.use('/view', express.static(path.join(`${__dirname}/`)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', route);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(
    `App started on port ${port} at: `,
    new Date().toLocaleString(),
  );
});
