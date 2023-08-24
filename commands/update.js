const readlineSync = require('readline-sync');

function updateTask(tasksFile) {
    console.table(tasksFile);
    const taskToUpdate = Number(readlineSync.question('What task would you like to change? Enter the tasks index, input must be numerical '));
    function checkInput(userInput) {
        if (!isNaN(userInput) && tasksFile.tasks[userInput]) {
            getUpdatedTask();
        } else {
            console.log('Input must be numerical and must match a tasks index');
            updateTask(tasksFile);
        }
    }
    checkInput();
    function getUpdatedTask()  {
        const updatedTask = readlineSync.question('Enter the updated task: ');
        if (updatedTask) {
            return updatedTask;
        } else {
            return false;
        }
    }
    if(getUpdatedTask()) {
        tasksFile.tasks[taskToUpdate] = getUpdatedTask;
    } else {
        console.log('Updated task must not be an empty value');
        getUpdatedTask();
    }
}

module.exports = {
    updateTask
}