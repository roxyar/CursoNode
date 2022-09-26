
const models = require("../database/models/index")
const errors = require("../const/errors")
const medico = require("../database/models/medico")


module.exports = {

    listar: async (req, res, next) => {
        try {
            const pac = await models.paciente.findAll()
               
            
            if (!pac) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: pac
                }
            })

        } catch (err) {
            return next(err)
        }
        
    },

    listarPaciente: async (req, res, next) => {
        try {
            const paci = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                include:[{
                    model: models.medico
                }]
            })
            if (!paci) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paci
                }
            })

        } catch (err) {
            return next(err)
        }
       
    },

    crear: async (req, res, next) => {
        try {
            const paci = await models.paciente.create(req.body)

            res.json({
                success: true,
                data: {
                    id: paci.id,
                    mensaje: "paciente creado con exito"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        
    }


}