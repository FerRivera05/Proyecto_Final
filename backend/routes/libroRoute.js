const express = require('express');
const router = express.Router();

const libroController = require('../controllers/libroController');
router.get('/', libroController.list);
router.post('/', libroController.save);
router.delete('/:cod_libro', libroController.delete);
router.get('/:cod_libro', libroController.edit);
router.post('/:cod_libro', libroController.update);

module.exports = router;