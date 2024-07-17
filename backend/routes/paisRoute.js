const express = require('express');
const router = express.Router();

const paisController = require('../controllers/paisController');
router.get('/', paisController.list);
router.post('/', paisController.save);
router.delete('/:cod_pais', paisController.delete);
router.get('/:cod_pais', paisController.edit);
router.post('/:cod_pais', paisController.update);

module.exports = router;