import * as DAL from "./riddlesDal.js";

const PATH = "./riddles.txt";

async function creatRidle(riddle){
    const arrRiddles = await DAL.readDBFile(PATH);
    arrRiddles.push(riddle);
    const srtRiddles = JSON.stringify(arrRiddles,null,2);
    await DAL.writeDBFile(PATH, srtRiddles)
    console.log(arrRiddles);
}

async function readRiddle(riddleId) {
    let riddle;
    const arrRiddles = await DAL.readDBFile(PATH);
    for (const currentRiddle of arrRiddles) {
        if (currentRiddle.id === riddleId) {
            riddle = currentRiddle;
        }
    }
    return riddle;
}