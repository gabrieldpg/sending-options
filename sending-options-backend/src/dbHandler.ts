import mongoose from 'mongoose';

// get schema for cards collection and its model
const cardsSchema = mongoose.Schema({ name: String });
const Cards = mongoose.model('cards', cardsSchema);


export default class dbHandler {

    // connect to mongodb using mongoose
    connect() {
        const dbUrl = 'mongodb://127.0.0.1:27017/sending-options';
        mongoose.connect(dbUrl, { useNewUrlParser: true });

        // get connection and log whether connected successfully or error
        const db = mongoose.connection;
        db.once('open', _ => {
        console.log('Database connected:', dbUrl)
        });

        db.on('error', err => {
        console.error('Connection error:', err)
        });
    }

    async getCollection(collection) {
        let result;
        switch(collection) {
            case 'cards':
                result = await Cards.find({});  // get all items in cards collection
                break;
            default:
                result = {};
                break;
        }
        return result;
    }
}