const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5000;

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('src', 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => console.log(`Server is listening on port ${port}...`));