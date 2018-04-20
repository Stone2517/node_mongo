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
  // db.collection('Todos').deleteMany({ text: 'eat'}).then((result) => {
  //    console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//   db.collection('Todos').deleteOne({ text: 'dinner'}).then((result) => {
//     console.log(result);
//  }, (err) => {
//    console.log('Unable to fetch todos', err);
//  });

db.collection('Todos').findOneAndDelete({ completed: true}).then((result) => {
  console.log(result);
}, (err) => {
 console.log('Unable to delete', err);
});


  // client.close();
});