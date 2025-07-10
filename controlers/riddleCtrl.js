import * as riddleDalFuncs from "../DAL/riddlesDal.js";

// Creates a new riddle and responds
export async function createRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        await riddleDalFuncs.createRiddle(riddle)

        return res.status(201).json({ message: "Riddle created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating riddle" });
    }
}

// Reads a riddle by ID and responds
export async function readRiddleCtrl(req, res) {
    try {
        const riddleId = req.params.riddleId;
        const riddle = await riddleDalFuncs.readRiddle(riddleId);

        return res.status(200).json(riddle);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddle" });
    }
}

// Updates an existing riddle and responds
export async function updateRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        await riddleDalFuncs.updateRiddle(riddle);

        return res.status(201).json({ message: "Riddle updated successfully" });
    } catch {
        return res.status(500).json({ message: "Error updating riddle" });
    }
}

// Deletes a riddle by ID and responds
export async function deleteRiddleCtrl(req, res) {
    try {
        const riddleId = req.params.riddleId;
        await riddleDalFuncs.deleteRiddle(riddleId);

        return res.status(200).json({ message: "Riddle deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting riddle" });
    }
}