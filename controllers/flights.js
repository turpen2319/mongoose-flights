const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights })
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    console.log('running create')
    
    // remove any whitespace at start and end of cast
    //req.body.cast = req.body.cast.trim();
   
    const flight = new Flight(req.body);
    flight.save(function(err) {
    // one way to handle errors
    if (err) {
        console.log(err);
        return res.render('flight/new', {
            validationError: true
        });
    } 
    console.log(flight);
    
    res.redirect('/flights');
    });
}