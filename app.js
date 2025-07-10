import express from "express";
import riddleRoutes from "./routes/riddleRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/riddles', riddleRoutes);

app.listen(PORT, () => {
    console.log(`run: http://localhost:${PORT}`);
});