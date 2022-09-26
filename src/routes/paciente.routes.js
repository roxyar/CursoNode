const router = require("express").Router(); // importar express.Router()
const medicoControllers = require("../controllers/paciente.controllers");
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const pacienteScheme = require('../middlewares/schemes/paciente.scheme') // importar el scheme de validacion de datos

router.get('/paciente/listar', pacienteControllers.listar)


res.send('Listado de PAcientes desde controller');

router.post('/', validate(pacienteScheme.crearPaciente), pacienteControllers.crear)
router.get('/:idPaciente', pacienteControllers.listarPaciente)

module.exports = router;