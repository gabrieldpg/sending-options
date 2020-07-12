import { cardsModel } from '../models/cardsModel';

// 

export default class DbHandler {

    private collection;
    private model;

    constructor(collection) {
        switch(collection) {
            case 'cards':
                this.model = cardsModel;
                break;
            default:
        }
        this.collection = collection;
    }

    // add new item
    post(item) {
        switch(this.collection) {
            case 'cards':
                new this.model({ name: item.cardname }).save(function (err, card) {
                    if (err) console.log(err);
                    console.log('saved card to db: ', card);
                });
                break;
            default:
        }        
    }

    // get all items
    async getAll() {
        return await this.model.find();
    }

    // get item from id
    async getById(id) {
        return await this.model.findById(id);
    }
}