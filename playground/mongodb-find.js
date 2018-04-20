// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('We are unable to connect to the MongoDB server or database');
  } 
  console.log('Connected to MongoDB server');
  var db = client.db('TodoApp');
  // db.collection('Todos').find({_id: new ObjectID('5ada229c4a2d0bb9e23b07c2')}).toArray().then((docs) => {
  //    console.log('Todos');
  //    console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//   db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//     // console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//    console.log('Unable to fetch todos', err);
//  });

 db.collection('Users').find({age: 20}).toArray().then((docs) => {
  // console.log(`Todos count: ${count}`);
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
 console.log('Unable to fetch todos', err);
});

  // client.close();
});