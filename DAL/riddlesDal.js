import * as FsDAL from './fsDal.js';

const PATH = '../lib/riddles.txt';

// Creates a new riddle if it doesn't already exist
async function createRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (isRiddleExists(riddle.id, riddlesArray)) {
        return;
    }
    
    riddlesArray.push(riddle);
    
    await saveRiddles(riddlesArray);
}

// Reads riddle by id
async function readRiddle(riddleId) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddleId, riddlesArray)) {
        return;
    }

    return riddlesArray.find((r) => r.id === riddleId);
}

// Updates an existing riddle if it exists
async function updateRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddle.id, riddlesArray)) {
        return;
    }

    const idx = riddlesArray.findIndex((r) => r.id === riddle.id);
    riddlesArray[idx] = riddle;

    await saveRiddles(riddlesArray);
}

// Deletes a riddle by id
async function deleteRiddle(riddleId) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddleId, riddlesArray)) {
        return;
    }
    
    const idx = riddlesArray.findIndex((r) => r.id === riddleId);
    riddlesArray.splice(idx, 1);

    await saveRiddles(riddlesArray);
}

// Helper functions

// Returns true if riddle with given id exists in the array
function isRiddleExists(riddleId, riddles) {
    return riddles.some((r) => r.id === riddleId);
}

// Saves the riddles array to the file
async function saveRiddles(riddlesArray) {
    try {
        const strRiddles = JSON.stringify(riddlesArray, null, 2);
        await FsDAL.writeDBFile(PATH, strRiddles);
    } catch (error) {
        log.error(`Error saving riddles: ${error.message}`);
    }
}