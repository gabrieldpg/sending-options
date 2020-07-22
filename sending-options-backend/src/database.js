/*
  Handles database configuration and connection
*/


const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

exports.startDatabase = function(databaseUrl) {

    mongoose.connect(databaseUrl);

    database = mongoose.connection;
    database.once('open', _ => {
        console.log('Database connected:', databaseUrl)
    });
    database.on('error', error => {
        return error;
    });
}