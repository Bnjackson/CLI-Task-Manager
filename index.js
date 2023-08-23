'use strict';
console.log('This program is a task manager. It allows you add tasks to a tasks.json file. You can then view, update, or delete those tasks. All from your command line.');

//Imported modules
const fileHandlingModule = require('./utilities/file-handling.js');
const inputModule = require('./utilities/input.js');
const addModule = require('./commands/add.js');
const viewModule = require('./commands/view.js');
const deleteModule = require('./commands/delete.js');
const updateModule = require('./commands/update.js');

async function main() {
    const tasksFile = await fileHandlingModule.tasksFile;
    const userCommand = await inputModule.userCommand;

    function callCommandsFunctions(userCommand) {
        if (userCommand === 'add') {
            addModule.addTask(tasksFile);
            console.log(tasksFile.tasks);
        } else if (userCommand === 'delete') {

        } else if (userCommand === 'update') {

        } else if (userCommand === 'view') {
            viewModule.outputTasks(tasksFile);
        } else {
            console.log(`ERROR: ${userCommand} does not match allowed commands`);
        }
    }
    callCommandsFunctions(userCommand);
}

main();