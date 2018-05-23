const MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('connection failed');;
  }
  console.log('connected successfully to the the DB');
  db.collection('Todos').insertOne({
    name:'sam',
    age:21
  },(err,result)=>{
    if(err){
      return console.log('connection failed',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  })
  db.close();
})
