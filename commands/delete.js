const readlineSync = require('readline-sync');

function deleteTasks(tasksFile) {
    const deleteQuestion = readlineSync.question('Would you like to delete all the tasks or just one task? Enter all or one: ').toLowerCase();
    if (deleteQuestion === 'all') {
        deleteAll();
    } else if (deleteQuestion === 'one') {
        deleteElement();
    } else {
        console.log('Input must be either "all" or "one"');
        return deleteTasks(tasksFile);
    }
    function deleteAll() {
        tasksFile.tasks = [];
        console.log('All tasks deleted');
    }
    function deleteElement() {
        console.table(tasksFile.tasks);
        const taskToDelete = Number(readlineSync.question('What task would you like to delete? Input a tasks index to delete it, input must be numerical: '));
        function checkInput(userInput) {
            if (!isNaN(userInput) && tasksFile.tasks[userInput]) {
                return true;
            } else {
                console.log(`${userInput} is not a correct input, make sure that the input is a number and that the index for the task exists.`);
                return false;
            }
        }
        checkInput(taskToDelete) ? tasksFile.tasks.splice(taskToDelete, 1) : deleteElement();
    }
}

module.exports= {
    deleteTasks
}