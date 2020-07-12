import express from 'express';
import bodyParser from 'body-parser';
import DbHandler from './db/DbHandler';

// Setup server and routing and uses database handler to handle requests

const db = new DbHandler();
db.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
  res.json({ endpoints: ['cards']});
});

app.post('/card', (req, res) => {
  db.postCollectionItem('cards', req.body);
  res.sendStatus(200);
});

app.get('/cards', async (req, res) => {
  res.json(await db.getCollection('cards'));
});

app.get('/cards/:cardId', async (req, res) => {
  res.json(await db.getCollectionItem('cards', req.params.cardId));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on http://localhost:${port}`);
});