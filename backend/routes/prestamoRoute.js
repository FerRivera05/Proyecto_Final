const express = require('express');
const router = express.Router();

const prestamoController = require('../controllers/prestamoController');
router.get('/', prestamoController.list);
router.post('/', prestamoController.save);
router.delete('/:cod_prestamo', prestamoController.delete);
router.get('/:cod_prestamo', prestamoController.edit);
router.post('/:cod_prestamo', prestamoController.update);

module.exports = router;