import express from "express";
import { addRiddle, getAllRiddles, getRiddle, updateRiddleCtrl, deleteRiddleCtrl, getRiddlesByTheirDifficulty} from "../ctrl/riddle.ctrl.js";
import { checkRiddleBody} from "../middlewares/riddleMidd.js";

const riddleRoutes = express.Router();

// Create a new riddle
riddleRoutes.post('/', checkRiddleBody, addRiddle);

// Read all riddles
riddleRoutes.get('/', getAllRiddles);

// Read riddle by id
riddleRoutes.get('/:riddleId', getRiddle);

// Read riddle by difficulty
riddleRoutes.get('/:difficulty', getRiddlesByTheirDifficulty)

// Update an existing riddle
riddleRoutes.put('/', checkRiddleBody, updateRiddleCtrl);

// Delete riddle by id
riddleRoutes.delete('/:deleteId', deleteRiddleCtrl);

export default riddleRoutes;