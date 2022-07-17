const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const port = 5000;

const url = 'mongodb://localhost:27017/catsDb';
mongoose.connect(url)
    .then(() => {
        console.log('Connection with MongoDB established');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.urlencoded({extended: false}));

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('src', 'views'));

app.use('/', router);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
