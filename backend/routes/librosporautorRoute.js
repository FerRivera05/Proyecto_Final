const express = require('express');
const router = express.Router();

const librosporautorController = require('../controllers/librosporautorController');
router.get('/', librosporautorController.list);
router.post('/', librosporautorController.save);
router.delete('/:cod_libroautor', librosporautorController.delete);
router.get('/:cod_libroautor', librosporautorController.edit);
router.post('/:cod_libroautor', librosporautorController.update);

module.exports = router;