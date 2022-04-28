const mongoose = require('mongoose');

const schema= mongoose.Schema;

const stickerSchema= new schema({
 name : {
     type : String,
     required : true
 },
 sku : {
     type : String,
     required : [true,"sku is empty! you need to fill sku"],
     unique : true
 },
 qte : {
     type: Number , 
     default : 0
 },
 imageUrl : {
     type :String ,
 },
 category : {
   type : mongoose.Schema.ObjectId,
     ref : "category"
 }

},
{
    timestamps :true
});
module.exports= Sticker =mongoose.model("sticker",stickerSchema);