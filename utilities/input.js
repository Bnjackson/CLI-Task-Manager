const readlineSync = require('readline-sync');

console.log(`The commands are:
add - add a task,
view - view all tasks,
delete - delete an individual or all tasks,
update - update an existing task
`);

async function getUserInput() {
    const userInput = readlineSync.question('What command would you like to enter? ').toLowerCase();
    function checkInput(userInput) {
        const allowedInputs = ['add', 'view', 'delete', 'update'];
        if (allowedInputs.includes(userInput)) {
            return true;
        } else {
            console.log("Input must match one of these commands: 'add', 'view', 'delete', 'update'");
            return false;
        }
    }
    return checkInput(userInput) ? userInput : getUserInput();
}

const userCommand = getUserInput(); 

module.exports = {
    userCommand
}