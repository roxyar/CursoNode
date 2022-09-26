
const models = require("../database/models/index")
const medico = require("../database/models/medico")


module.exports = {

    listar: async (req, res, next) => {
        
    },

    listarMedico: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })
            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    medico: medico
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