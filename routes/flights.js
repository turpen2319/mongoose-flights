var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights.js')
//all routes start with /flights
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);

//remember to put below /new ... it will think 'new' is the id if it hits this route
//when we actually wanna hit our /new route
router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

module.exports = router;
