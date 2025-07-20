import { createPlayer, getPlayerByName } from "../db/playerDal.js";

export async function addPlayer(req, res) {
    try {
        const player = req.body;
        const playerName = req.body.name;
        const isSamePlayer = await createPlayer(player);

        return res.status(201).json({ message: "Player created successfully", player: player });
    } catch (error) {
        return res.status(500).json({ message: "Error creating player" });
    }
}

export async function getPlayer(req, res) {
    try {
        const playerName = req.params.playerName;
        const isPlayerExists = await getPlayerByName(playerName);
        
        if (!isPlayerExists) {
            return res.status(404).json({ message: "Player not found" });
        }

        return res.status(200).json(isPlayerExists);
    } catch (error) {
        return res.status(500).json({ message: "Error reading player" });
    }
}
