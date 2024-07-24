const express = require('express');
const router = express.Router();
const TareaController = require('../controller/TareaController');

router.post('/', TareaController.agregarTareas);
router.get('/', TareaController.monstrarTareas);
router.put('/:id', TareaController.actualizarTareas);
router.get('/:id', TareaController.monstrarTarea);

module.exports = router;