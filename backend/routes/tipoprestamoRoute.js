const express = require('express');
const router = express.Router();

const tipoprestamoController = require('../controllers/tipoprestamoController');
router.get('/', tipoprestamoController.list);
router.post('/', tipoprestamoController.save);
router.delete('/:cod_tipoprestamo', tipoprestamoController.delete);
router.get('/:cod_tipoprestamo', tipoprestamoController.edit);
router.post('/:cod_tipoprestamo', tipoprestamoController.update);

module.exports = router;