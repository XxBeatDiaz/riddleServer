import * as FsDAL from './fsDal.js';

const PATH = '../lib/riddles.txt';

async function createRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);
    if (!isRiddleExists(riddle.id, riddlesArray)) {
        riddlesArray.push(riddle);

        await saveRiddles(riddlesArray);
    }
}

async function readRiddle(riddleId = null) {
    const riddlesArray = await FsDAL.readDBFile(PATH);
    if (!riddleId) {
        return riddlesArray;
    }
    return riddlesArray.find((r) => r.id === riddleId);
}

async function updateRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddle.id, riddlesArray)) {
        await createRiddle(riddle);
        return;
    }

    const idx = riddlesArray.findIndex((r) => r.id === riddle.id);
    riddlesArray[idx] = riddle;

    await saveRiddles(riddlesArray);
}

async function deleteRiddle(riddleId) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (isRiddleExists(riddleId, riddlesArray)) {
        const idx = riddlesArray.findIndex((r) => r.id === riddleId);
        riddlesArray.splice(idx, 1);
    }

    await saveRiddles(riddlesArray);
}

// Helper funcs
function isRiddleExists(riddleId, riddles) {
    return riddles.some((r) => r.id === riddleId);
}

async function saveRiddles(riddlesArray) {
    const strRiddles = JSON.stringify(riddlesArray, null, 2);
    await FsDAL.writeDBFile(PATH, strRiddles);
}
