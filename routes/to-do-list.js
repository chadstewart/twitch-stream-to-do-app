const express = require('express');
const router = express.Router();

const todolist_controller = require('../controllers/to-do-list-controller');

router.get('/', todolist_controller.todolist_get);
router.post('/', todolist_controller.todolist_new);
router.put('/', todolist_controller.todolist_replace);
router.patch('/', todolist_controller.todolist_modify);
router.delete('/', todolist_controller.todolist_delete);

module.exports = router;