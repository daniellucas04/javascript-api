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

module.exports = { getAllTasks, createTask }