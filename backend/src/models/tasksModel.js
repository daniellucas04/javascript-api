const connection = require('./connection')

async function getAllTasks() {
    let query = 'SELECT * FROM tasks'
    const [tasks] = await connection.execute(query);
    return tasks;
}

async function createTask(task) {
    const { title } = task;
    let query = `INSERT INTO tasks (title) VALUES ('${title}')`;
    const [createdTask] = await connection.execute(query);
    return {insertId: createdTask.insertId};
}

async function deleteTask(id) {
    let query = `DELETE FROM tasks WHERE id = ${id}`;

    const [removedTask] = await connection.execute(query);
    return removedTask;
}

async function updateTask(id, task) {
    const {title, status} = task;

    let query = `UPDATE tasks SET title = '${title}', status = '${status}' WHERE id = ${id}`;

    const [updateTask] = await connection.execute(query);
    return updateTask;
}

module.exports = { getAllTasks, createTask, deleteTask, updateTask }