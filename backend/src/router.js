const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const router = express.Router();

/**
 * Retorna um array com todas as tasks do banco
 */
router.get('/tasks', tasksController.getAllTasks)

/**
 * Retorna o ID da última inserção do banco
 */
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createdTask)

/**
 * Utilizado para remover uma tarefa do banco
 */
router.delete('/tasks/:id', tasksController.deleteTask)

/**
 * Utilizado atualizar uma tarefa no banco
 */
router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateTask)

module.exports = router;