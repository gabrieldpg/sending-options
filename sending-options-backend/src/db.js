// get instance of mongoose, set some defaults for depreciated functionalities 
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// connect to mongodb
const dbUrl = 'mongodb://127.0.0.1:27017/sending-options';
mongoose.connect(dbUrl);

// get mongoose connection and log outcome
db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected:', dbUrl)
});
db.on('error', err => {
    console.error('Connection error:', err)
});