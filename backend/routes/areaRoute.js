const express = require('express');
const router = express.Router();

const areaController = require('../controllers/areaController');
router.get('/', areaController.list);
router.post('/', areaController.save);
router.delete('/:cod_area', areaController.delete);
router.get('/:cod_area', areaController.edit);
router.post('/:cod_area', areaController.update);

module.exports = router;