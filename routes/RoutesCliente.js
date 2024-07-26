const express = require('express');
const router = express.Router();
const ClienteController = require('../controller/ClienteController');

//aca van las rutas del crub
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarClientes);
router.patch('/:id', ClienteController.modificarCliente);
//router.put('/:id', ClienteController.ActualizarCliente);
//router.put('/:id', ClienteController.ActualizarClientes);



module.exports = router; 