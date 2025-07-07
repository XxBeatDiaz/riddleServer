import * as FsDAL from "./fsDal.js";

const PATH = "../lib/riddles.txt";

async function creatRidle(riddle) {
    const arrRiddles = await FsDAL.readDBFile(PATH);
    if (!isRiddleExists(riddle.id, arrRiddles)) {
        arrRiddles.push(riddle);
        const strRiddles = JSON.stringify(arrRiddles, null, 2);
        await FsDAL.writeDBFile(PATH, strRiddles)
    }
}

async function readRiddle(riddleId = null) {
    const arrRiddles = await FsDAL.readDBFile(PATH);
    if (!riddleId) {
        return arrRiddles;
    }

    let riddle;
    for (const currentRiddle of arrRiddles) {
        if (currentRiddle.id === riddleId) {
            riddle = currentRiddle;
            break;
        }
    }
    return riddle;
}

async function updateRiddle(riddle) {
    const arrRiddles = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddle.id, arrRiddles)) {
        creatRidle(riddle);
    } else {
        for (const currentRiddle of arrRiddles) {
            if (currentRiddle.id === riddle.id) {
                const idx = arrRiddles.indexOf(currentRiddle);
                arrRiddles[idx] = riddle;
                break;
            }
        }
    }
    const strRiddles = JSON.stringify(arrRiddles, null, 2);
    await FsDAL.writeDBFile(PATH, strRiddles)
}

async function deleteRiddle(riddleId) {
    const arrRiddles = await FsDAL.readDBFile(PATH);
    if (isRiddleExists(riddleId, arrRiddles)) {
        for (const riddle of arrRiddles) {
            if (riddle.id === riddleId) {
                const idx = arrRiddles.indexOf(riddle);
                arrRiddles.splice(idx, 1);
            }
        }
    }
    const strRiddles = JSON.stringify(arrRiddles, null, 2);
    await FsDAL.writeDBFile(PATH, strRiddles)
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