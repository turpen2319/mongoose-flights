const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://turpen2319:dispel5236@cluster0.yraft.mongodb.net/SEI?retryWrites=true&w=majority');

const db = mongoose.connection;


db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
    
})

