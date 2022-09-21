// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()
const medicoControllers = require("../controllers/medico.controllers");

router.get('/prueba', medicoControllers.listar)

res.send('Listado de Médicos desde controller');

module.exports = router;