// Importaciones de librerias

const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

//Coneccion a la base de datos
const ConectDB = require('./connection');
ConectDB();


//Inicializar librerias
const app = express();

//Configuraciones
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Recursos Estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Rutas
app.use(require('./routers/user.routers'))
app.use(require('./routers/tasks.routers'))

//Inicio del server
app.listen(port,() =>{ console.log(`Se inicio el servidor en el puerto: ${port}`)})