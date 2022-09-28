
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
    modificar: async (req, res, next) => {
        try {
            const elpaciente = await models.paciente.findOne({
                where: {
                    documento: req.body.documento
                }
            })

            if (!elpaciente) return next(errors.PacienteInexistente)
            
          elpaciente.set({
            nombre: req.body.nombre,
                       
            obra_social:req.body.obra_social
          });

          //  await elpaciente.update({ nombre: req.body.nombre })
            // The database now has "Ada" for name, but still has the default "green" for favorite color
            await elpaciente.save()

            res.json({
                success: true,
                data: {
                    id: elpaciente.nombre,
                    mensaje: "paciente modificado con exito"
                }
            })

        } catch (err) {
            return next(err)
        }
    
    
    
    }


}