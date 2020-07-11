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
const dbHandler_1 = __importDefault(require("./dbHandler"));
const db = new dbHandler_1.default();
db.connect();
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.get('/cards', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.json(yield db.getCollection('cards'));
}));
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map