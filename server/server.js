
const express = require('express')
const cors =require("cors");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');

const {Schema}= mongoose;

const coursesSchema= new Schema({
    imgurl:{type:String, required:true},
    advanced: {type:String, required:true},
    capable: {type:String, required:true},
    imageurl: {type:String, required:true},
    name: {type:String, required:true},
    username: {type:String, required:true},
    author: {type:String, required:true},
    price: {type:String, required:true},
    
})

const  Courses = mongoose.model("courses", coursesSchema);

const app = express()
app.use(cors());

app.use(bodyParser.json());
const port = 8080;

app.get('/courses', (req, res) => {
    Courses.find({}, (err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(500).json({message:err})
        }
    })
  
})


//get by id

app.get("/courses/:id", (req,res)=>{
    const {id}=req.params;
    Courses.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
                res.status(200);
            }else{
                res.status(404).json({message:"not found"})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})

//delete

app.delete("/courses/:id", (res,req)=>{
    const {id}=req.params;
    Courses.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.send("successfuly delete")
        }
        else{
            res.status(404).json({message:err})
        }
    })
});


//post

app.post("/courses/", (res,req)=>{
    let product=new Courses({
        imgurl: req.body.imgurl,
        model:req.body.model,
        name:req.body.name,
        price: req.body.price,
    })
    product.save();
    res.send({message:"succes"})
});


//put

app.put("/courses/:id", (req, res)=>{
    const{id}=req.params;
    Courses.findByIdAndUpdate(id, req.body, (err, docs)=>{
        if(!err){
            res.status(201);
        }else{
            res.status(500).json(err);
        }
    });
    res.send({message: "Succesfly updated"})
});




mongoose.connect("mongodb+srv://aliyevag:aliyevag@cluster0.4mvfi79.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(!err){

        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }
})