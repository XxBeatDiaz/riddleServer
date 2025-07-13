import * as FsDAL from './fsDal.js';

const PATH = './lib/riddlesDB.txt';

// Creates a new riddle if it doesn't already exist
export async function createRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (isRiddleExists(riddle.id, riddlesArray)) {
        return riddle;
    }

    riddlesArray.push(riddle);

    await saveRiddles(riddlesArray);
}

// Reads all riddles
export async function readAllRiddles() {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (riddlesArray.length === 0) {
        return false;
    }

    return riddlesArray;
}

// Reads riddle by id
export async function readRiddle(riddleId) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddleId, riddlesArray)) {
        return false;
    }

    return riddlesArray.find((r) => r.id === riddleId);
}

// Updates an existing riddle if it exists
export async function updateRiddle(riddle) {
    const riddlesArray = await FsDAL.readDBFile(PATH);

    if (!isRiddleExists(riddle.id, riddlesArray)) {
        return false;
    }

    const idx = riddlesArray.findIndex((r) => r.id === riddle.id);
    riddlesArray[idx] = riddle;

    await saveRiddles(riddlesArray);
    return true;
}

// Deletes a riddle by id
export async function deleteRiddle(riddleId) {
    const riddlesArray = await FsDAL.readDBFile(PATH);
    
    if (!isRiddleExists(riddleId, riddlesArray)) {
        return false;
    }

    const idx = riddlesArray.findIndex((r) => r.id === riddleId);
    riddlesArray.splice(idx, 1);

    await saveRiddles(riddlesArray);
    return true;
}


// ***Helper functions*** //

// Returns true if riddle with given id exists in the array
function isRiddleExists(riddleId, riddles) {
    console.log(`riddle exists: ${riddles.some((r) => r.id === riddleId)}`);

    return riddles.some((r) => r.id === riddleId);
}

// Saves the riddles array to the file
async function saveRiddles(riddlesArray) {
    try {
        const strRiddles = JSON.stringify(riddlesArray, null, 2);
        await FsDAL.writeDBFile(PATH, strRiddles);
        console.log("Riddles saved successfully");
    } catch (error) {
        log.error(`Error saving riddles: ${error.message}`);
    }
}