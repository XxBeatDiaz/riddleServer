import fsProms from "fs/promises";

// Reads riddle database file
export async function readDBFile(path){    
    try {
        const content = await fsProms.readFile(path, "utf-8");
        return JSON.parse(content)
    } catch (error) {
        console.log(error); 
    }
}

// Writes content to the riddle database file
export async function writeDBFile(path, content) {
    try {
        await fsProms.writeFile(path, content)
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}