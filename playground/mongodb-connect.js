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
//   db.collection('Todos').insertOne({
//       text: 'Something to do',
//       completed: false
//   }, (err, result) => {
//       if(err){
//           return console.log('Unable to insert todo', err);
//       }
//       console.log(JSON.stringify(result.ops, undefined,2));
//   })

//   db.collection('Users').insertOne({
//       name: 'Stone',
//       age: 20,
//       location: 'Hyderabad'
//   }, (err, result) => {
//       if(err){
//           return console.log('Unable to insert user info', err);
//       }
//       console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//   })
  client.close();
});