const express = require('express');
const router = express.Router();

const tipolibroController = require('../controllers/tipolibroController');
router.get('/', tipolibroController.list);
router.post('/', tipolibroController.save);
router.delete('/:cod_tipolibro', tipolibroController.delete);
router.get('/:cod_tipolibro', tipolibroController.edit);
router.post('/:cod_tipolibro', tipolibroController.update);

module.exports = router;