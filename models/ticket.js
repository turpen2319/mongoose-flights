const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;

const ticketShema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/}, //using a regular expression
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: "Flight"
    }
}) 

module.exports = mongoose.model('Ticket', ticketShema);