const mongoose = require('mongoose');

const schema= mongoose.Schema;

const categorySchema= new schema({
 name:{
     type: String,
     required: true,
 },
 stickers : [
     {
         type : mongoose.Schema.ObjectId,
         ref : "stickers"
     }
 ]

},
{
    timestamps :true
});
module.exports= Category =mongoose.model("category",categorySchema);