import mongoose from 'mongoose';
import CardsDbHandler from './CardsDbHandler';

// Handles database connection and
// directs database requets to correct colletion for handling

export default class DbHandler {

    // get instance of cards database handler
    private cardsDb = new CardsDbHandler();

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

    postCollectionItem(collection, item) {
        switch(collection) {
            case 'cards':
                this.cardsDb.postCard(item);
                break;
            case 'document-templates':
                break;
            case 'fields':
                break;
            default:
                console.log('collection doesnt exist');
        }
    }

    async getCollection(collection) {
        let result;
        switch(collection) {
            case 'cards':
                result = await this.cardsDb.getCards();
                break;
            default:
                result = collection+' is not a valid collection';
        }
        return result;
    }

    async getCollectionItem(collection, itemId) {
        let result;
        switch(collection) {
            case 'cards':
                result = await this.cardsDb.getCard(itemId);
                break;
            default:
                result = collection+' is not a valid collection';
        }
        return result;
    }
}