import * as DAL from "./riddlesDal.js";

const PATH = "./riddles.txt";

async function creatRidle(riddle) {
    const arrRiddles = await DAL.readDBFile(PATH);
    if (!isRiddleExists(riddle.id, arrRiddles)) {
        arrRiddles.push(riddle);
        const strRiddles = JSON.stringify(arrRiddles, null, 2);
        await DAL.writeDBFile(PATH, strRiddles)
    }
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

async function updateRiddle(riddle) {
    const arrRiddles = await DAL.readDBFile(PATH);

    if (!isRiddleExists(riddle.id, arrRiddles)) {
        creatRidle(riddle);
    } else {
        for (const currentRiddle of arrRiddles) {
            if (currentRiddle.id === riddle.id) {
                const idx = arrRiddles.indexOf(currentRiddle);
                arrRiddles[idx] = riddle;
            }
        }
    }
    const strRiddles = JSON.stringify(arrRiddles, null, 2);
    await DAL.writeDBFile(PATH, strRiddles)
}


//Helper func
function isRiddleExists(riddleId, riddles) {
    for (const riddle of riddles) {
        if (riddle.id === riddleId) {
            return true;
        }
    }
    return false;
}


const riddle = {
    id: 8,
    type: "regular",
    difficulty: "hard",
    name: "Riddle science",
    taskDescription: "What is the lightest element in the periodic table?",
    correctAnswer: "hydrogen"
}
updateRiddle(riddle)