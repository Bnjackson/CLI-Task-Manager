'use sync';

const fs = require('fs');

const filePath = './data/data.json';

async function readTaskFile(filePath) {
    try {
        const data = await fs.readFileSync(filePath);
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (err) {
        console.error(`Got an errror trying to read ${filePath} : ${err}`);
    }
}

const tasksFile = readTaskFile(filePath);

module.exports = {
  tasksFile
};