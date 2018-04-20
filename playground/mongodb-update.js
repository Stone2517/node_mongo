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
  
 db.collection('Todos').findOneAndUpdate({ _id: ObjectID('5ada2f5c4a2d0bb9e23b0ad3')}, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
  console.log(result);
}, (err) => {
 console.log('Unable to fetch todos', err);
});

  // client.close();
});