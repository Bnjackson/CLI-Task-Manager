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

async function writeTaskfile(tasksFile, filePath = './data/data.json') {
  const tasksFileJSON = JSON.stringify(tasksFile);
  fs.writeFile(filePath, tasksFileJSON, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully\n");
    }
  });

}

const tasksFile = readTaskFile(filePath);

module.exports = {
  tasksFile,
  writeTaskfile
};