'use strict';

console.log('This program is a task manager. It allows you add tasks to a tasks.json file. You can then view, update, or delete those tasks. All from your command line.');

//Imported required modules
const readlineSync = require('readline-sync');
const fileHandlingModule = require('./utilities/file-handling.js');
const inputModule = require('./utilities/input.js');
const addModule = require('./commands/add.js');
const viewModule = require('./commands/view.js');
const deleteModule = require('./commands/delete.js');
const updateModule = require('./commands/update.js');

//Function to handle user commands
async function callCommandsFunctions(userCommand, tasksFile) {
    try {
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
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

async function main() {
    try {
        let shouldContinue = true;
        while(shouldContinue) {
            //Will run until getAnotherCommand returns false
            console.log('Main called');
            const tasksFile = await fileHandlingModule.tasksFile;
            const userCommand = await inputModule.getUserInput();
            await callCommandsFunctions(userCommand, tasksFile);
            shouldContinue = shouldContinueLoop();
        }
        console.log('Thank you for using this program.')
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

//Function to determine if the user wants to continue or end the loop
function shouldContinueLoop () {
    const userAnswer = readlineSync.question('Would you like to enter another command? Enter "y" or "n": ').toLowerCase();
    return userAnswer === 'y';
}

main();