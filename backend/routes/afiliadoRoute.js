const express = require('express');
const router = express.Router();

const afiliadoController = require('../controllers/afiliadoController');
router.get('/', afiliadoController.list);
router.post('/', afiliadoController.save);
router.delete('/:cod_afiliado', afiliadoController.delete);
router.get('/:cod_afiliado', afiliadoController.edit);
router.post('/:cod_afiliado', afiliadoController.update);

module.exports = router;