
const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function dbConnect(){
    try{
        let res = await client.connect();
        let db = res.db('ecom');
        return db.collection('products');
    }
    catch(error){
        console.log(error);
    }
}
module.exports = dbConnect;