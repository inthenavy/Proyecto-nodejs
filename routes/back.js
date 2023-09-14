const express = require('express');
const router = express.Router();
const {
    adminGET,
    agregarProductoGET,
    editarGET,
    loginGET,
} = require('../controllers/back.js');


router.get('/admin', adminGET)
  
  router.get('/agregar-producto', agregarProductoGET)
  
  router.get('/editar-producto', editarGET)
  
  router.get('/login', loginGET)

  module.exports = router