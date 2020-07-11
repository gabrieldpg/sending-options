"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// get schema for cards collection and its model
const cardsSchema = mongoose_1.default.Schema({ name: String });
const Cards = mongoose_1.default.model('cards', cardsSchema);
class dbHandler {
    // Mongoose Schemas
    //private cardsSchema;
    // Mongoose Models
    //private Cards;
    // connect to mongodb using mongoose
    connect() {
        const dbUrl = 'mongodb://127.0.0.1:27017/sending-options';
        mongoose_1.default.connect(dbUrl, { useNewUrlParser: true });
        // get connection and log whether connected successfully or error
        const db = mongoose_1.default.connection;
        db.once('open', _ => {
            console.log('Database connected:', dbUrl);
        });
        db.on('error', err => {
            console.error('Connection error:', err);
        });
        //this.loadModels();
    }
    // load models from database
    /*private loadModels() {
        // get schema for cards collection and its model
        this.cardsSchema = mongoose.Schema({ name: String });
        this.Cards = mongoose.model('cards', this.cardsSchema);
    }*/
    getCollection(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            switch (collection) {
                case 'cards':
                    result = yield Cards.find({}); // get all items in cards collection
                    break;
                default:
                    result = {};
                    break;
            }
            return result;
        });
    }
}
exports.default = dbHandler;
//# sourceMappingURL=dbHandler.js.map