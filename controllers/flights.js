const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,

}


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        })
    });
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    console.log('running create')
   
    const flight = new Flight(req.body);
    console.log(flight.departs)
    if (flight.departs === null) flight.departs = Date.now() + 365*24*60*60000;
    console.log('after' + flight.departs)
    flight.save(function(err) {
    // one way to handle errors
    if (err) {
        console.log(err);
        return res.render('flights/new', {
            validationError: true
        });
    } 
    console.log(flight);
    
    res.redirect('/flights');
    });
}