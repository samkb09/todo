const mongoose = require('mongoose');

var user =mongoose.model('user',{
  email:{
    type:String,
    minlength:2,
    trim:true,
    required:true
  }
})

module.exports={
  user
}
