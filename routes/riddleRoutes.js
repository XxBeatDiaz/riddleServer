import express from "express";
import { createRiddleCtrl, readAllRiddlesCtrl, readRiddleCtrl, updateRiddleCtrl, deleteRiddleCtrl} from "../controlers/riddleCtrl.js";
import { checkRiddleBody} from "../middlewares/riddleMidd.js";

const riddleRoutes = express.Router();

// Create a new riddle
riddleRoutes.post('/', checkRiddleBody, createRiddleCtrl);

// Read all riddles
riddleRoutes.get('/', readAllRiddlesCtrl);

// Read riddle by id
riddleRoutes.get('/:riddleId', readRiddleCtrl);

// Update an existing riddle
riddleRoutes.put('/', checkRiddleBody, updateRiddleCtrl);

// Delete riddle by id
riddleRoutes.delete('/:deleteId', deleteRiddleCtrl);

export default riddleRoutes;