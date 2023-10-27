const dbConnect = require('./mongodb');
const main = async () => {
    let db = await dbConnect();

    let result = await db.insertOne({
        name: 'shubham',
        brand: 'moto',
        price: 10000,
        category: 'mobile',
      });
    // console.log(result);
    if(result.acknowledged){
      console.log("data inserted");
  }
}
main();