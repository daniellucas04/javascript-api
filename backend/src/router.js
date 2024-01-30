const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const router = express.Router();

/**
 * Retorna um array com todas as tasks do banco
 */
router.get('/tasks', tasksController.getAllTasks)

/**
 * Retorna o ID da última inserção
 */
router.post('/tasks', tasksMiddleware.validateBody, tasksController.createdTask)

module.exports = router;