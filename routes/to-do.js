const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/to-do-controller');

router.get('/', todo_controller.todo_get);
router.post('/', todo_controller.todo_new);
router.put('/', todo_controller.todo_replace);
router.patch('/', todo_controller.todo_modify);
router.delete('/', todo_controller.todo_delete);

module.exports = router;