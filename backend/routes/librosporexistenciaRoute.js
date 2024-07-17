const express = require('express');
const router = express.Router();

const librosporexistenciaController = require('../controllers/librosporexistenciaController');
router.get('/', librosporexistenciaController.list);
router.post('/', librosporexistenciaController.save);
router.delete('/:cod_existencia', librosporexistenciaController.delete);
router.get('/:cod_existencia', librosporexistenciaController.edit);
router.post('/:cod_existencia', librosporexistenciaController.update);

module.exports = router;