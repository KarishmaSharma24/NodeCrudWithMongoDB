const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    const db = await dbConnect();
    const result = await db.deleteMany({name:'shubham'});
    
    console.log(result);
    if(result.acknowledged){
        console.log("data deleted");
    }
}


deleteData();