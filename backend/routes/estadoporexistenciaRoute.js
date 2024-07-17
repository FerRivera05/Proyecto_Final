const express = require('express');
const router = express.Router();

const estadoporexistenciaController = require('../controllers/estadoporexistenciaController');
router.get('/', estadoporexistenciaController.list);
router.post('/', estadoporexistenciaController.save);
router.delete('/:cod_estadoexistencia', estadoporexistenciaController.delete);
router.get('/:cod_estadoexistencia', estadoporexistenciaController.edit);
router.post('/:cod_estadoexistencia', estadoporexistenciaController.update);

module.exports = router;