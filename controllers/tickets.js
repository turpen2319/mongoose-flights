const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
}

function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id})
}

function create(req, res) {
    // const ourFlight = Flight.findById(req.params.id);
    //console.log(flight);
    const ticket = new Ticket(req.body)
    ticket.flight = req.params.id;
    //console.log("Flight ID: " + ourFlight._id)
    console.log(ticket);
    ticket.save(function(err) {
        if (err) {
            console.log("ERROR!" + err);
            return res.redirect(`/flights/${req.params.id}`);
        }
        //console.log(ticket);
        
        res.redirect(`/flights/${req.params.id}`)
    });
} 

