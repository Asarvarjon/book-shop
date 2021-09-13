const { MongoClient } = require("mongodb");

const Mongo_CS = "mongodb+srv://book:parol@cluster0.i6biz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(Mongo_CS);

async function mongodb() {
    try {
        await client.connect();

        const db = await client.db("book_shop");

        const users = db.collection("users");
        const books = db.collection("books")
        const orders = db.collection("orders")

        return {
            users,
            books,
            orders,
        }
    } catch (error) {
        console.log("MongoDB Error", error);
    }
}


module.exports = mongodb;