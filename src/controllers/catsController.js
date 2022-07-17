const router = require('express').Router();
const Cat = require('../models/Cat');

router.get('/', async (req, res) => {
    const cats = await Cat.find();

    const catsConverted = cats.map(x => x.toObject());
    res.render('cats', { cats: catsConverted });
});

module.exports = router;