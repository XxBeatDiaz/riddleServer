import riddleFuncDAL from "../DAL/riddlesDal.js";

export async function createRiddleCtrl(req, res) {
    try {
        const riddle = req.body;
        await riddleFuncDAL.createRiddle(riddle)

        return res.status(201).json({ message: "Riddle created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating riddle" });
    }
}

export async function readRiddleCtrl(req, res) {
    try {
        const riddleId = req.params.riddleId;
        const riddle = await riddleFuncDAL.readRiddle(riddleId);

        if (!riddle) {
            return res.status(404).json({ message: "Riddle not found" });
        }

        return res.status(200).json(riddle);
    } catch (error) {
        return res.status(500).json({ message: "Error reading riddle" });
    }
}
