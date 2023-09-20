const express = require('express');
const router = express.Router();
const {
    adminGET,
    agregarProductoGET,
    agregarProductoPOST,
    editarProductoGET,
    editarProductoPOST,
    borrarProductoGET,
    loginGET,
    loginPOST,
} = require('../controllers/back.js');


router.get('/admin', adminGET)
  
  router.get('/agregar-producto', agregarProductoGET)
  router.post('/agregar-producto', agregarProductoPOST)
  
  router.get('/editar-producto/:id', editarProductoGET)
  router.post('/editar-producto/:id', editarProductoPOST)

  router.get('/borrar-producto/:id', borrarProductoGET)
  
  router.get('/login', loginGET)
  router.post('/login', loginPOST)
  
  module.exports = router