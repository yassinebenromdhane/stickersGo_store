const Category = require('../models/category.model');

exports.postCategory = async (req,res)=>{
    // console.log(req.body)
    
    try {
        const newCategory= new Category({ ...req.body });
        const cat =await Category.findOne({ name : req.body.name });
         if(cat){
            res.status(400).send({message :"category already exist"});
            return;
         }
        const response = await newCategory.save();
        res.send({response:response,message:"Category is saved"});
    } catch (error) {
        res.status(500).send("can not save it");
    }
     
 }

 exports.getAll=async (req,res) =>{
    try {
        const result = await Category.find().populate('stickers');
        res.send({response:result,message:"getting Categorys succefuly"});
    } catch (error) {
        res.status(400).send({message:"can not get Categorys"});

        
    }

}

exports.getOne = async (req,res) =>{
    try {
        const result = await Category.findOne({_id:req.params.id});
        if(!result){
            res.status(400).send({message:"there is no Category  with this id"});
            return;
        }
        else{
            res.send({response:result,message:"getting Category succefuly"});
            return;
        }
        } catch (error) {
        res.status(400).send({message:"there is no Category  with this id"});  
    }

}
 exports.deleteOne= async (req,res) =>{
    try {
        const result= await Category.deleteOne({_id:req.params.id});
        console.log(result);
        result.n
        ?res.send({message:"Category deleted"})
        :res.send({message:"there is no Category with this id"});
    } catch (error) {
        res.send({message:"there is no id"});
    }
}

exports.updateOne= async (req,res)=>{
    try {
        const result =await Category.updateOne(
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
