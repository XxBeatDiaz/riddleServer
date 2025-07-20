import { getRiddles,  getRiddleById, createRiddle, updateRiddle, deleteRiddle, getRiddlesByDifficulty} from "../db/riddlesDal.js";

// Creates a new riddle and responds
export async function addRiddle(req, res) {
    try {
        const riddle = req.body;
        const isSameRiddle = await createRiddle(riddle)

        if (isSameRiddle === riddle) {
            return res.status(400).json({ message: "Riddle already exists", riddle: isSameRiddle });
        }

        return res.status(201).json({ message: "Riddle created successfully", riddle: riddle });
    } catch (error) {
        return res.status(500).json({ message: "Error creating riddle" });
    }
}

// Reads all riddles and responds
export async function getAllRiddles(req, res) {
    try {
        const riddles = await getRiddles();
        if (!riddles) {
            return res.status(404).json({ message: "No riddles found" });
        }

        return res.status(200).json(riddles);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddles" });
    }
}

// Reads a riddle by ID and responds
export async function getRiddle(req, res) {
    try {
        const riddleId = req.params.riddleId;
        const isRiddleExists = await getRiddleById(riddleId);
        
        if (!isRiddleExists) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(200).json(isRiddleExists);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddle" });
    }
}


// Reads a riddle by ID and responds
export async function getRiddlesByTheirDifficulty(req, res) {
    try {
        const difficulty = req.params.difficulty;
        const isRiddlesExists = await getRiddlesByDifficulty(difficulty);
        
        if (!isRiddlesExists) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(200).json(isRiddlesExists);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddles" });
    }
}

// Updates an existing riddle and responds
export async function updateRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        const isRiddleExists = await updateRiddle(riddle);
        
        if (!isRiddleExists) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(201).json({ message: "Riddle updated successfully" });
    } catch {
        return res.status(500).json({ message: "Error updating riddle" });
    }
}

// Deletes a riddle by ID and responds
export async function deleteRiddleCtrl(req, res) {
    try {
        const deleteRiddleId = req.params.deleteId;
        const isRiddleExists = await deleteRiddle(deleteRiddleId);

        if (!isRiddleExists) {
            return res.status(404).json({ message: "Riddle deleted or not found" });
        }

        return res.status(200).json({ message: "Riddle deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting riddle" });
    }
}