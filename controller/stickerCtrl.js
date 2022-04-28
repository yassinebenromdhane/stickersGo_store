const Sticker = require('../models/sticker.model');

exports.postSticker = async (req,res)=>{
    // console.log(req.body)
    
    try {
        const newSticker= new Sticker({ ...req.body });
        
         const stick =await Sticker.findOne({ sku : req.body.sku });
         if(stick){
            res.status(400).send({message :"sku already exist"});
            return;
         }
 
        const response = await newSticker.save();
        res.send({response:response,message:"sticker is saved"});
    } catch (error) {
        res.status(500).send("can not save it");
    }
     
 }

 exports.getAll=async (req,res) =>{
    try {
        const result = await Sticker.find().populate('category');
        res.send({response:result,message:"getting stickers succefuly"});
    } catch (error) {
        res.status(400).send({message:"can not get Stickers"});

        
    }

}

exports.getOne = async (req,res) =>{
    try {
        const result = await Sticker.findOne({_id:req.params.id});
        if(!result){
            res.status(400).send({message:"there is no Sticker  with this id"});
            return;
        }
        else{
            res.send({response:result,message:"getting Sticker succefuly"});
            return;
        }
        } catch (error) {
        res.status(400).send({message:"there is no Sticker  with this id"});  
    }

}
 exports.deleteOne= async (req,res) =>{
    try {
        const result= await Sticker.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ?res.send({message:"Sticker deleted"})
        :res.send({message:"there is no Sticker with this id"});
    } catch (error) {
        res.send({message:"there is no id"});
    }
}

exports.updateOne= async (req,res)=>{
    try {
        const result =await Sticker.updateOne(
            {_id:req.params.id},
            {$set:{...req.body}
        });
        console.log(result);
        res.nModified 
        ?res.send({message:"update successfully"})
        :res.send({message:"allready updated"});
    } catch (error) {
        res.status(400).send({message:"update rejected"});
    }
}
