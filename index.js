/*const express = require('express'); // importar express
//const globalConstants = require('../const/globalConstants.js')

const app = express(); // crear una instancia de express

// GET /
app.get('/', (req, res) => { // req: request, res: response
    res.send('Hola!! esta es una API'); // envia una respuesta
});

// GET /
app.get('/api/pacientes', (req, res) => { // req: request, res: response
  //  var a = globalConstants.NOMBRE_DEFAULT;
    res.send('Listado de Pacientes'); // envia una respuesta
});
app.get('/api/paciente/:documento', (req, res) => { // req: request, res: response

    res.send('Consulta del Paciente Documento Nº:'+req.params.documento); // 
});
// GET /
app.get('/api/tratamientos', (req, res) => { // req: request, res: response
    res.send('Listado de Tratamientos'); // envia una respuesta
});
app.get('/api/medicos', (req, res) => { // req: request, res: response
    res.send('Listado de Médicos'); // envia una respuesta
});

// configura el puerto

app.listen(5000); // escucha en el puerto 5000
console.log('Servidor corriendo en el puerto 5000');
*/