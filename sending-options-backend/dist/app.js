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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/sending-options';
mongoose_1.default.connect(dbUrl, { useNewUrlParser: true });
const db = mongoose_1.default.connection;
db.once('open', _ => {
    console.log('Database connected:', dbUrl);
});
db.on('error', err => {
    console.error('connection error:', err);
});
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
const Cards = mongoose_1.default.model('cards', mongoose_1.default.Schema({
    name: String
}));
app.get('/cards', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const filter = {}; // so all items are returned
    const all = yield Cards.find(filter);
    res.json(all);
}));
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map