'use strict';

console.log('This program is a task manager. It allows you add tasks to a tasks.json file. You can then view, update, or delete those tasks. All from your command line.');

//Imported modules
const readlineSync = require('readline-sync');
const fileHandlingModule = require('./utilities/file-handling.js');
const inputModule = require('./utilities/input.js');
const addModule = require('./commands/add.js');
const viewModule = require('./commands/view.js');
const deleteModule = require('./commands/delete.js');
const updateModule = require('./commands/update.js');

async function main() {
    const tasksFile = await fileHandlingModule.tasksFile;
    const userCommand = await inputModule.userCommand;

    async function callCommandsFunctions(userCommand) {
        if (userCommand === 'add') {
            addModule.addTask(tasksFile);
        } else if (userCommand === 'delete') {
            deleteModule.deleteTasks(tasksFile)
        } else if (userCommand === 'update') {
            updateModule.updateTask(tasksFile);
        } else if (userCommand === 'view') {
            viewModule.outputTasks(tasksFile);
        } else {
            console.log(`ERROR: ${userCommand} does not match allowed commands`);
        }
        await fileHandlingModule.writeTaskfile(tasksFile)
    }

    await callCommandsFunctions(userCommand);

    // function getAnotherCommand() {
    //     const anotherCommand = readlineSync.question('Would you like to enter another command? Enter "y" for yes, and "n" for no: ').toLowerCase();
    //     if (anotherCommand === 'y') {
    //         main();
    //     } else {
    //         console.log('Thanks for using this program.');
    //     }
    // }
    // getAnotherCommand();
}

main();