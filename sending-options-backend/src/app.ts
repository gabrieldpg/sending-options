import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

const dbUrl = 'mongodb://127.0.0.1:27017/sending-options';
mongoose.connect(dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', dbUrl)
});

db.on('error', err => {
  console.error('connection error:', err)
});

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

const Cards = mongoose.model('cards', mongoose.Schema({
    name: String
}));

app.get('/cards', async (req, res) => {
    const filter = {}; // so all items are returned
    const all = await Cards.find(filter);
    res.json(all);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on http://localhost:${port}`);
});