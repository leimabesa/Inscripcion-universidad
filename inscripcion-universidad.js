//importamos la libreria de express
const express = require('express');

//importamos la libreria de Mongoose
const mongoose = require('mongoose');

//llamamos al constructor de express
const app = express();

//endpoints => Rutas // Configuración 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const router = express.Router();

//indicador donde estan los endPoints de la aplicación
app.use('/inscripcion-universidad/api', require('./router/rutas'));

//Se configura la cadena de conexión a la BDs que está en MongDB
mongoose.connect('mongodb+srv://Leimabesa:L29028245@cluster0.9uzyydf.mongodb.net/Grupo27DB')
   .then( db => console.log('Conexión Exitosa'))
   .catch(err => console.log('Error als conectarse con la BDs', err));

//poner en modo escucha el servidor
const puerto = 3000;
app.listen(puerto,() => {
    console.log(`El servidor esta online en el puerto y esta funcionando con NODEMON ${puerto}`);
});

