import mongoose from 'mongoose';

export default class DbConnection {
    private dbUrl;

    constructor(dbUrl) {
        this.dbUrl = dbUrl;
    }

    // connect to mongodb using mongoose
    connect() {
        mongoose.connect(this.dbUrl, { useNewUrlParser: true });

        // get connection and log whether connected successfully or error
        const db = mongoose.connection;
        db.once('open', _ => {
        console.log('Database connected:', this.dbUrl)
        });

        db.on('error', err => {
        console.error('Connection error:', err)
        });
    }
}