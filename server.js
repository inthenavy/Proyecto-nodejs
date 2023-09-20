const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const rutasFront = require('./routes/front.js');
const session = require('express-session');
const rutasBack = require('./routes/back.js');
require('./views/helpers/helpers.js')

const port = 3000

//sesiones mediante cookies
app.use(session({
  secret: "lalala",
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 300000 } // 5 minutos
}))

//middlewares para tomar los datos del formulario
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.set('view engine', 'hbs'); //indica que usaremos la plantilla "handlebars"
app.set('views', [
    path.join('./views/front'),
    path.join('./views/back'),
    path.join('./views'),
  ])
hbs.registerPartials(__dirname + '/views/partials'); //indicamos el directorio hacia los parciales

app.use(express.static('public')); //indica la carpeta public para considerar archivos estáticos

app.use('/', rutasFront);
app.use('/', rutasBack);

//RUTAS BACK

  
  app.use((req, res, next) => {
    res.status(404).render('404',{
      titulo: "404 - No Encontrado"
    })
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})