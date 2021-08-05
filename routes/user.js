const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user-controller');

router.post('/', user_controller.user_get);
router.post('/', user_controller.user_new);
router.put('/', user_controller.user_replace);
router.patch('/', user_controller.user_modify);
router.delete('/', user_controller.user_delete);

module.exports = router;