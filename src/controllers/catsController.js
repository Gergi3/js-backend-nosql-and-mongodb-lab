const router = require('express').Router();
const Cat = require('../models/Cat');

router.get('/', async (req, res) => {
    const cats = await Cat.find();

    const catsConverted = cats.map(x => x.toObject());
    res.render('cats', { cats: catsConverted });
});

router.get('/create', (req, res) => {
    res.render('createCat');
})

router.post('/create', async (req, res) => {
    console.log(req.body)
    await Cat.create(req.body);

    res.redirect('/cats');
})

module.exports = router;