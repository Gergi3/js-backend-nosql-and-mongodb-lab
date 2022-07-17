const router = require('express').Router();

const catsRouter = require('./controllers/catsController');
const homeRouter = require('./controllers/homeController');

router.use('/', homeRouter);
router.use('/cats', catsRouter);

module.exports = router;