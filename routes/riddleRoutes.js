import express from "express";

const riddleRoutes = express.Router();

// Create a new riddle
riddleRoutes.post('/create')

// Read riddle by id
riddleRoutes.get('/:riddleId')

// Update an existing riddle
riddleRoutes.put('/update')

// Delete a riddle by id
riddleRoutes.delete('/delete')

export default riddleRoutes;