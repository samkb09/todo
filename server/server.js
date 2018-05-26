const express = require('express');
const bodyParser = require('body-parser');

var{mongoose}=require('./db/mongodb.js')
var {todos}=require('./models/todo')
var {user}=require('./models/user')

var app = express()

 app.use(bodyParser.json());
//post request
app.post('/todos',(req,res)=>{
  var users = new user({
    email:req.body.email
  });
  users.save().then((doc)=>{
    res.send(doc)
  },(e)=>{
    res.status(400).send(e)
  })
})

//get request

app.get('/sam',(req,res)=>{
  todos.find().then((result)=>{
    res.send(result)}
      ,(e)=>{
       res.status(400).send(e)
     })
  })


app.listen(3000,()=>{
  console.log('hey! i\'m there');
})
