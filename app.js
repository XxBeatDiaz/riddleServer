import express from "express";

const app = express();

app.use(express.json());

app.use('/riddles', );

app.listen(PORT, () => {
    console.log(`run: http://localhost:${PORT}`);
});