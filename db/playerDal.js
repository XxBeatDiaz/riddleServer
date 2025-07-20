import { ObjectId } from "mongodb";
import { connectToDatabase } from "./db.js";

export async function getPlayerByName(playerName) {
    const db = await connectToDatabase();
    const player = await db.collection('players').findOne({ name: playerName});
    return player;
}

export async function createPlayer(player) {
    const db = await connectToDatabase();
    const result = await db.collection('players').insertOne(player);
    const newPlayer = await getPlayerByName(player.name);
    return newPlayer;
}