//const productos = require('../data/productos.json');
require('dotenv').config()
const db = require('../models/connection.js')

const adminGET = (req, res) => {
  
  let sql = "SELECT * FROM productos"
  db.query(sql, (err, data) => {
      if (err) throw err
          res.render('admin', {
      titulo: "Panel de Control", 
      productos: data
  })
  })
}

const agregarProductoGET = (req, res) => {
    console.log("Estás en agregar producto");
    res.render('agregar-producto',{
    })
  }

const editarGET = (req, res) => {
    console.log("Estás en editar-producto");
    res.render('editar-producto',{
    })
  }

  const loginGET = (req, res) => {
    console.log("Estás en login");
    res.render('login',{
    })
  }

  module.exports = {
    adminGET,
    agregarProductoGET,
    editarGET,
    loginGET,
  }