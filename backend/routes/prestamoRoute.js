const express = require('express');
const router = express.Router();

const prestamoController = require('../controllers/prestamoController');
router.get('/', prestamoController.list);
router.post('/', prestamoController.save);
router.delete('/:cod_pais', prestamoController.delete);
router.get('/:cod_pais', prestamoController.edit);
router.post('/:cod_pais', prestamoController.update);

module.exports = router;