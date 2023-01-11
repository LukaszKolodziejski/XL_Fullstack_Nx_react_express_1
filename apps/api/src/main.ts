import * as express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { environment } from './environments/environment';

const { db } = environment;
const uri = `${db.protocol}://${db.user}:${db.password}@${db.host}/${db.user}`;

const app = express();

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

const port = environment.port || 8084;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
