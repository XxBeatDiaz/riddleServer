import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_CONNECTION);
let db;

export async function connectToDatabase() {
    if(!db){
        await client.connect();
        db = client.db("riddleGame");
        console.log("Connected to database");     
    }
    return db;
}

connectToDatabase();