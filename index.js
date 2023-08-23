'use strict';

const fileHandlingModule = require('./utilities/file-handling.js');
const inputModule = require('./utilities/input.js');

async function main() {
    console.log('This program is a task manager. It allows you add tasks to a tasks.json file. You can then view, update, or delete those tasks. All from your command line.');
    const tasksFile = await fileHandlingModule.tasksFile;
    console.log(tasksFile);
    const userCommand = await inputModule.userCommand;
    console.log(userCommand);
}

main();