const express = require('express');
const router = express.Router();

const editorialController = require('../controllers/editorialController');
router.get('/', editorialController.list);
router.post('/', editorialController.save);
router.delete('/:cod_editorial', editorialController.delete);
router.get('/:cod_editorial', editorialController.edit);
router.post('/:cod_editorial', editorialController.update);

module.exports = router;