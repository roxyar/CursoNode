
const models = require("../database/models/index")
const medico = require("../database/models/medico")
const errors = require("../const/errors")


module.exports = {

    listar: async (req, res, next) => {
        try {
            const medi = await models.medico.findAll()
            

            if (!medi) return next(errors.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    medico: medi
                }
            })
         } catch (err) {
            return next(err)
        }
    },

    listarMedico: async (req, res, next) => {
        try {
            const medi = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            })
            if (!medi) return next(errors.MedicoInexistente)

            res.json({
                success: true,
                data: {
                    medico: medi
                }
            })

        } catch (err) {
            return next(err)
        }
       
    },

    crear: async (req, res, next) => {
        try {
            const medi = await models.medico.create(req.body)

            res.json({
                success: true,
                data: {
                    id: medi.id
                }
            })

        } catch (err) {
            return next(err)
        }
        
    },

    prueba: async (req, res) => {
        
    }


}