const mongoose = require('mongoose');

var todos= mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  completed:{
    type: Boolean,
    default:true,
  },
  completedat:{
    type: Number,
    default: null
  }

})
module.exports={
  todos
}
