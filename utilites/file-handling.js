'use sync';

const fs = require('fs');
const filePath = '../data/data.json';

async function readTaskFile(filePath) {
    try {
        const data = await fs.readfile(filePath);
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        return parsedData;
    } catch (err) {
        console.error(`Got an errror trying to read ${filePath} : ${err}`);
    }
}