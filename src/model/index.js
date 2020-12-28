var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/"
var dbname = "blogOfYourMood";

var db;

module.exports = async () => {
    if(db) {
        return db;
    }

    const client = await MongoClient.connect(uri);
    db = client.db(dbname);
    return db;
}