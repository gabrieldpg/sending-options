import mongoose from 'mongoose';

// handles database requests for cards collection

export default class CardsDbHandler {

    // get schema for cards collection and card model
    private cardsSchema = mongoose.Schema({ name: String });
    private Card = mongoose.model('cards', this.cardsSchema);

    // add new card
    postCard(card) {
        new this.Card({ name: card.cardname }).save(function (err, card) {
            if (err) console.log(err);
            console.log('saved card to db: ', card);
        });
    }

    // get all cards
    async getCards() {
        return await this.Card.find();
    }

    // get card from id
    async getCard(id) {
        return await this.Card.findById(id);
    }
}