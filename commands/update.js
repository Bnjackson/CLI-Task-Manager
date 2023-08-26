const readlineSync = require('readline-sync');

function updateTask(tasksFile) {
    console.table(tasksFile.tasks);
    const taskToUpdate = Number(readlineSync.question('What task would you like to change? Enter the tasks index, input must be numerical '));
    function checkInput(userInput) {
        if (tasksFile.tasks[userInput]) {
            getUpdatedTask()
        } else {
            console.log('Input must be numerical and must match a tasks index');
            updateTask(tasksFile);
        }
    }
    checkInput(taskToUpdate);
    function getUpdatedTask()  {
        const updatedTask = readlineSync.question('Enter the updated task: ');
        if (updatedTask) {
            tasksFile.tasks[taskToUpdate] = updatedTask;
        } else {
            console.log('Updated task must not be an empty value');
            getUpdatedTask();
        }
    }
}

module.exports = {
    updateTask
}