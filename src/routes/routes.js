const express = require('express');
const ClientController = require ('../controllers/clientController.js');
const router = express.Router();
 
//Rotas dos clientes
router.post('/clients', ClientController.Insert);
router.get('/clients', ClientController.SelectAll);
router.get('/clients/:cpf', ClientController.SelectDetail);
router.put('/pay/:id', ClientController.Pay);
router.put('/encash/:id', ClientController.Encash);
router.delete('/clients/:id', ClientController.Delete);
router.get('/login/:cpf/:password', ClientController.Login);

module.exports = router;

