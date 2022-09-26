const router = require("express").Router(); // importar express.Router()
const medicoControllers = require("../controllers/medico.controllers");
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const medicoScheme = require('../middlewares/schemes/medico.scheme') // importar el scheme de validacion de datos

router.get('/medico/listar', medicoControllers.listar)


res.send('Listado de Médicos desde controller');


router.post('/', validate(medicoScheme.crearMedico), medicoControllers.crear)
router.get('/:idMedico', medicoControllers.listarMedico)

module.exports = router;