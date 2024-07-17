const express = require('express');
const router = express.Router();

const estadoController = require('../controllers/estadoController');
router.get('/', estadoController.list);
router.post('/', estadoController.save);
router.delete('/:cod_estado', estadoController.delete);
router.get('/:cod_estado', estadoController.edit);
router.post('/:cod_estado', estadoController.update);

module.exports = router;