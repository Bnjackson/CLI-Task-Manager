const readlineSync = require('readline-sync');

function addTask(tasksFile) {
    const userInput = readlineSync.question('Enter the task you would like to add? ');
    if (userInput) {
        tasksFile.tasks.push(userInput);
    } else {
        console.log(`ERROR: ${userInput} is not a correct input. Input must have a value`);
    }
}

module.exports = {
    addTask
}
