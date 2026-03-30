const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://allemkarthik_db_user:KKSy73EWbjgpf7qa@learningfirstcluster.t1snlwf.mongodb.net/";
const client = new MongoClient(url);

const dbName = "helloworld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstName: "kalyan",
    lastname: "allem",
    age: "21",
    location: "hyderabad",
  };

  //   insert data into database
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  
  //read data from db
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
