const dbConnect = require('./mongodb');
const update = async()=>{
    let db = await dbConnect();
    let result = await db.updateOne(
        {name:'shubham'},{$set : 
            {name:"gomu"}
        }
    );
    // console.log(result);
    if(result.acknowledged){
        console.log("data updated");
    }
}

update();