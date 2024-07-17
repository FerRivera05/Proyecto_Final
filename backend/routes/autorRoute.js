const express = require('express');
const router = express.Router();

const autorController = require('../controllers/autorController');
router.get('/', autorController.list);
router.post('/', autorController.save);
router.delete('/:cod_autor', autorController.delete);
router.get('/:cod_autor', autorController.edit);
router.post('/:cod_autor', autorController.update);

module.exports = router;