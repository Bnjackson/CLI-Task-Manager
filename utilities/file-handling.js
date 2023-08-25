const fs = require('fs');
const fsPromises = require('fs/promises');

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

async function writeTaskfile(tasksFile, filePath = './data/data.json') {
  const tasksFileJSON = JSON.stringify(tasksFile);
  try {
    await fsPromises.writeFile(filePath, tasksFileJSON);
    console.log('File written successfully');
  } catch (err) {
    console.log(err);
  }
}

const tasksFile = readTaskFile(filePath);

module.exports = {
  tasksFile,
  writeTaskfile
};