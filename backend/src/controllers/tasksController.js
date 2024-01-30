const tasksModel = require('../models/tasksModel');

async function getAllTasks(_request, response) {
    const tasks = await tasksModel.getAllTasks();
 
    return response.status(200).json(tasks);
}

async function createdTask(request, response) {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask)
}

async function deleteTask(request, response) {
    const { id } = request.params;
    await tasksModel.deleteTask(id);
    return response.status(204).json();
}

async function updateTask(request, response) {
    const { id } = request.params;
    await tasksModel.updateTask(id, request.body);
    return response.status(204).json();
}

module.exports = { getAllTasks, createdTask, deleteTask, updateTask }