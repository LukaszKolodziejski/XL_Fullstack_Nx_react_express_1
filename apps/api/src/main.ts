import * as express from 'express';
// import { Ticket } from '@happyorg/data';

import { MongoClient, ObjectId } from 'mongodb';

// const uri = "mongodb+srv://devrekru:eCyjhsokB1S5AVg8@cluster0.q0q3nf9.mongodb.net/devrekru?retryWrites=true&w=majority";
const uri =
  'mongodb+srv://devrekru:eCyjhsokB1S5AVg8@cluster0.q0q3nf9.mongodb.net/devrekru';

const app = express();

type Ticket = {
  title: string;
  id: number;
};

const tickets: Ticket[] = [
  {
    title: `Install updates`,
    id: 1,
  },
  {
    title: `Restore the backup lalala`,
    id: 2,
  },
];

app.get('/api/crawls', (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;

    db.db('devrekru')
      .collection('crawls')
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

app.get('/api/resource/:crawlId', (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;

    db.db('devrekru')
      .collection('resources')
      // .find({ crawl: new ObjectId('63b3f7a0f6a417b6bfd102b7') })
      .find({ crawl: new ObjectId(req.params.crawlId) })
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

const port = process.env.port || 8084;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
