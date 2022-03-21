const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: () => 'DEN'
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },

    departs: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const day = currentDate.getDate();
            const oneYearLater = new Date(year + 1, month, day);
            return oneYearLater;
        }
    },
    
    destinations: [destinationSchema],
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
