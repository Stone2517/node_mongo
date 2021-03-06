const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });
    
    newTodo.save().then((doc) => {
        res.send(doc);
      }, (err) => {
          res.status(400).send(err);
      });
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
     res.send({todos})
   }, (e) => {
      res.status(400).send(e);
   });
});

app.listen(3000, () => {
   console.log('Started on port 3000');
});

module.exports = {app};
