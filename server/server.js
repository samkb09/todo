const express = require('express');
const bodyParser = require('body-parser');

var{mongoose}=require('./db/mongodb.js')
var {Todo}=require('./models/todo')
var {user}=require('./models/user')

var app = express()

 app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var users = new user({
    email:req.body.text
  });
  users.save().then((doc)=>{
    res.send(doc)
  },(e)=>{
    res.status(400).send(e)
  })
})

app.listen(3000,()=>{
  console.log('hey! i\'m there');
})
