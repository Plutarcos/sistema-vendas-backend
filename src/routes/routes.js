const express = require('express');
const ProductController = require ('../controllers/productController.js');
const ClientController = require ('../controllers/clientController.js');
const OrderController = require ('../controllers/orderController.js');
const router = express.Router();
 

//Rotas dos produtos
router.post('/products', ProductController.Insert);
router.get('/products', ProductController.SelectAll);
router.get('/products/:id', ProductController.SelectDetail);
router.put('/products/:id', ProductController.Update);
router.delete('/products/:id', ProductController.Delete);

//Rotas dos clientes
router.post('/clients', ClientController.Insert);
router.get('/clients', ClientController.SelectAll);
router.get('/clients/:id', ClientController.SelectDetail);
router.put('/clients/:id', ClientController.Update);
router.delete('/clients/:id', ClientController.Delete);

//Rotas dos pedidos
router.post('/orders', OrderController.Insert);
router.get('/orders', OrderController.SelectAll);
router.delete('/orders/:id', OrderController.Delete);
 
module.exports = router;