const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app=express();

const Note=require('./models/noteModel');
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://shivamgupta_ram:Mukti%4015feb@shivamgupta.lwygp.mongodb.net/Blog')
.catch((error)=>{
    console.log("error in mongo",error);
});

app.get("/items",(req,res)=>{
    Note.find()
    .then((items)=>{
        res.json(items)
    console.log(items)})
    .catch((err)=>res.status(400).json("Error:" + err));
})



app.use("/",require('./routes/noteRoute'));

// Read Data





app.listen(3001,()=>{
    console.log("server running at 3001")
});