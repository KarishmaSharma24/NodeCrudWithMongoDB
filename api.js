const express = require('express');
const mongodb = require('mongodb');
const dbConnect  = require('./mongodb');

const app = express();
app.use(express.json());

app.get('/product/data', async (req, res)=>{
    let db = await dbConnect();
    let data = await db.find().toArray();
    res.send(data);
})

app.post('/product/create', async (req, res)=>{
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    res.send(result);
})

app.put('/product/update/:name', async(req, res)=>{
    let db = await dbConnect();
    let result = await db.updateOne(
        {name : req.params.name},
        {$set : req.body}
    );
    res.send(result);
})

app.delete('/product/delete/:id', async (req, res)=>{
    let db= await dbConnect();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    if(result.acknowledged){
        res.send("deleted successfully");
        console.log("data deleted successfully");
    }
});

app.listen(5000);