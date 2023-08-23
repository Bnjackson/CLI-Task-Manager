function outputTasks(tasksFile) {
    if (tasksFile.tasks.length > 0) {
        console.table(tasksFile.tasks);
    } else {
        console.log('The tasks file is empty, go add some tasks first before viewing.');
    }
}

module.exports = {
    outputTasks
};