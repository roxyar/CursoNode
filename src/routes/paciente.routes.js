const router = require("express").Router(); // importar express.Router()
const pacienteControllers = require("../controllers/paciente.controller");
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const pacienteScheme = require('../middlewares/schemes/paciente.scheme') // importar el scheme de validacion de datos

router.get('/listar', pacienteControllers.listar)


//res.send('Listado de PAcientes desde controller');

router.post('/nuevo', pacienteControllers.crear)
router.get('/:idPaciente', pacienteControllers.listarPaciente)

module.exports = router;