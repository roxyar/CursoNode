const router = require("express").Router();
const medicoControllers = require("../controllers/medico.controller");
const validate = require('../middlewares/validate') 
const medicoScheme = require('../middlewares/schemes/medico.scheme') 

router.get('/listar', medicoControllers.listar)


//res.send('Listado de Médicos desde controller');


router.post('/nuevo', validate(medicoScheme.crearMedico), medicoControllers.crear)
router.get('/:idMedico', medicoControllers.listarMedico)

module.exports = router;