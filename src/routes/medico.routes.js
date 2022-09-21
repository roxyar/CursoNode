// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()
const usuarioController = require('../controllers/medico.controller'); // importar el archivo de controladores de usuarios
const medicoControllers = require("../controllers/medico.controllers");

router.get('/prueba', medicoControllers.listar)

res.send('Listado de Médicos desde controller');

module.exports = router;