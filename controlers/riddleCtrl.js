import * as riddleDalFuncs from "../DAL/riddlesDal.js";

// Creates a new riddle and responds
export async function createRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        const isSameRiddle = await riddleDalFuncs.createRiddle(riddle)

        if (isSameRiddle === riddle) {
            return res.status(400).json({ message: "Riddle already exists", riddle: isSameRiddle });
        }

        return res.status(201).json({ message: "Riddle created successfully", riddle: riddle });
    } catch (error) {
        return res.status(500).json({ message: "Error creating riddle" });
    }
}

// Reads all riddles and responds
export async function readAllRiddlesCtrl(req, res) {
    try {
        const riddles = await riddleDalFuncs.readAllRiddles();

        if (!riddles) {
            return res.status(404).json({ message: "No riddles found" });
        }

        return res.status(200).json(riddles);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddles" });
    }
}

// Reads a riddle by ID and responds
export async function readRiddleCtrl(req, res) {
    try {
        const riddleId = req.params.riddleId;
        const isRiddleExists = await riddleDalFuncs.readRiddle(riddleId);
        
        if (!isRiddleExists) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(200).json(isRiddleExists);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddle" });
    }
}

// Updates an existing riddle and responds
export async function updateRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        const isRiddleExists = await riddleDalFuncs.updateRiddle(riddle);

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
        const riddle = await riddleDalFuncs.deleteRiddle(deleteRiddleId);

        if (!riddle) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(200).json({ message: "Riddle deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting riddle" });
    }
}