const mongoose = require('mongoose');

const schema= mongoose.Schema;

const userSchema= new schema({
 name:{
     type: String,
     required: true,
 },
 email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
password :{
    type:String,
    required: true
},
role : {
    type : String,
    default : "admin" 
}

},
{
    timestamps :true
});
module.exports= User =mongoose.model("user",userSchema);