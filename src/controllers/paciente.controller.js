
const models = require("../database/models/index")


module.exports = {

    listar: async (req, res, next) => {
        
    },

    listarPaciente: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })
            if (!paciente) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }
       
    },

    crear: async (req, res, next) => {
        
    },

    prueba: async (req, res) => {
        
    }


}