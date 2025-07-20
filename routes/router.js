import express from "express";
import riddleRoutes from "./riddleRoutes.js";
import playerRoutes from "./playerRoutes.js";

const router = express.Router();

router.use('/riddles', riddleRoutes);
router.use('/players', playerRoutes);

export default router;