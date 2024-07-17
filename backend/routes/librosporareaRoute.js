const express = require('express');
const router = express.Router();

const librosporareaController = require('../controllers/librosporareaController');
router.get('/', librosporareaController.list);
router.post('/', librosporareaController.save);
router.delete('/:cod_libroarea', librosporareaController.delete);
router.get('/:cod_libroarea', librosporareaController.edit);
router.post('/:cod_libroarea', librosporareaController.update);

module.exports = router;