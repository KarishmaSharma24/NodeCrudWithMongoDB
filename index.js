
// Replace the uri string with your connection string.

const dbConnect = require('./mongodb');
const main = async () => {
    let data = await dbConnect();
    let result = await data.find().toArray();
    console.log(result);
}
main();

