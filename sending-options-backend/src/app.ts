import express from 'express';
import bodyParser from 'body-parser';
import DbConnection from './db/DbConnection';
import DbHandler from './db/DbHandler';

// Setup server and routing and uses database handlers to handle requests

const dbConnection = new DbConnection('mongodb://127.0.0.1:27017/sending-options');
dbConnection.connect();

const dbCards = new DbHandler('cards');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
  res.json({ endpoints: ['cards']});
});

app.post('/card', (req, res) => {
  dbCards.post(req.body);
  res.sendStatus(200);
});

app.get('/cards', async (req, res) => {
  res.json(await dbCards.getAll());
});

app.get('/cards/:cardId', async (req, res) => {
  res.json(await dbCards.getById(req.params.cardId));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on http://localhost:${port}`);
});