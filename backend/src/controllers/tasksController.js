const tasksModel = require('../models/tasksModel');

async function getAllTasks(_request, response) {
    const tasks = await tasksModel.getAllTasks();
 
    return response.status(200).json(tasks);
}

async function createdTask(request, response) {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask)
}

module.exports = { getAllTasks, createdTask }