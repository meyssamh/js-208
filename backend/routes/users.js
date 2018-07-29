var router          = require('express').Router();
var developers      = require('./../models/developers');

router.get('/', async (req, res, next) => {
    let developer = await developers.find({}).exec();
    res.json(developer);
});

router.post('/', function(req, res, next) {
    (new developers(req.body)).save().then(
        (doc) => {
            res.json(doc);
        }
    ).catch(
        (e) => {
            res.status(419).json(e);
        }
    );
});

router.get('/:id', async (req, res, next) => {
    let developer = await developers.findById({}).exec();
    res.json(developer);
});

router.put('/:id', async (req, res, next) => {
    let developer = await developers.findByIdAndUpdate({}).exec();
    res.json(developer);
});

router.delete('/:id', async (req, res, next) => {
    let developer = await developers.findByIdAndDelete({}).exec();
    res.json(developer);
});

module.exports = router;