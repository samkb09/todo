const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  // if(err){
  //   return console.log('connection failed');
  // }
  // console.log('connected successfully to the the DB');
  // db.collection('Todos').find({'_id': new ObjectID('123')}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log('unable to fetch');
  // })

if(err){
  return console.log('connection failed');
}

console.log('connected successfully to the the DB');


db.collection('Todos').count({name: 'sam'}).then((docs)=>{
  console.log(docs);
})
//db.close();
})
