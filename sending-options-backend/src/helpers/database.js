/*
  Handles database configuration and connection
*/


const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

function startDatabase(databaseUrl) {

    mongoose.connect(databaseUrl);

    database = mongoose.connection;
    database.once('open', _ => {
        console.log('Database connected:', databaseUrl)
    });
    database.on('error', error => {
        console.error('Error connecting to database', databaseUrl, error);
    });
}

module.exports = {
    startDatabase
}