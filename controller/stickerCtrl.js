const Sticker = require('../models/sticker.model');

exports.postSticker = async (req,res)=>{
    console.log(req.body)
    
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