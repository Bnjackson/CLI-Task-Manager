'use strict';

const fileHandlingModule = require('./utilities/file-handling.js');

async function main() {
    const tasksFile = await fileHandlingModule.tasksFile;
    console.log(tasksFile);
}

main();