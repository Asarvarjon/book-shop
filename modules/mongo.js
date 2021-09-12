const { MongoClient } = require("mongodb");

const Mongo_CS = process.env.Mongo_CS;

const client = new MongoClient(Mongo_CS);

async function mongodb() {
    try {
        await client.connect();

        const db = await client.db("book_shop");

        const users = db.collection("users");

        return {
            users,
        }
    } catch (error) {
        console.log("MongoDB Error", error);
    }
}


module.exports = mongodb;