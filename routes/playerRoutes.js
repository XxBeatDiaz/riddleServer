import express from "express";
import { addPlayer, getPlayer } from "../ctrl/player.Ctrl.js";

const playerRoutes = express.Router();

// // Create a new player
playerRoutes.post('/', addPlayer);

// // Get all players
// playerRoutes.get('/');

// Get player by id
playerRoutes.get('/:playerName', getPlayer);

// // Update an existing player
// playerRoutes.put('/');

// // Delete player by id
// playerRoutes.delete('/:playerId');

export default playerRoutes;