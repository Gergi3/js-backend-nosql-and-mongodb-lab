const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

const dbName = 'catsDb'
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log('Connection with MongoDB established...');
    })

const db = client.db(dbName);
const catsCollection = db.collection('cats');

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.resolve('src', 'views'));

app.get('/', async (req, res) => {
    const cats = await catsCollection.find().toArray();
    res.render('home', { cats });
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
