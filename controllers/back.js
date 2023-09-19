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
      titulo: "Agregar producto"
    })
  }

  const agregarProductoPOST = (req, res) => {
    const info = req.body
    const sql = "INSERT INTO productos SET ?"
    db.query(sql, info, (err, data) => {
      if (err) throw err
      console.log("Producto agregado")
      res.render("agregar-producto", {
        mensaje: "Producto agregado",
        titulo: "Agregar producto"
      })
    })
  }

const editarGET = (req, res) => {
    console.log("Estás en editar-producto");
    res.render('editar-producto',{
      titulo: "Editar producto",
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
    agregarProductoPOST,
    editarGET,
    loginGET,
  }