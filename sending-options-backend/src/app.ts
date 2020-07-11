import express from 'express';
import dbHandler from './dbHandler';

const db = new dbHandler();
db.connect();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.get('/cards', async (req, res) => {
  res.json(await db.getCollection('cards'));
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on http://localhost:${port}`);
});