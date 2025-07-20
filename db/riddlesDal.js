import { ObjectId } from "mongodb";
import { connectToDatabase } from "./db.js";

export async function getRiddles() {
    const db = await connectToDatabase();
    const result = await db.collection('riddles').find().toArray();
    return result;
}

export async function getRiddleById(riddleId) {
    const db = await connectToDatabase();
    const riddle = await db.collection('riddles').findOne({ _id: new ObjectId(riddleId) });
    return riddle;
}

export async function getRiddlesByDifficulty(difficulty) {
    const db = await connectToDatabase();
    const riddles = await db.collection('riddles').find({ difficulty: difficulty})
    return riddles;
}

export async function createRiddle(riddle) {
    const db = await connectToDatabase();
    const result = await db.collection('riddles').insertOne(riddle);
    return result.insertedId;
}

export async function updateRiddle(riddleId, updatedRiddle) {
    const db = await connectToDatabase();
    const result = await db.collection('riddles').updateOne(
        { _id: new ObjectId(riddleId) },
        { $set: updatedRiddle }
    );
    return result.modifiedCount > 0;
}

export async function deleteRiddle(riddleId) {
    const db = await connectToDatabase();
    const result = await db.collection('riddles').deleteOne({ _id: new ObjectId(riddleId) });
    return result.deletedCount > 0;
}

