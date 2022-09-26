// ARCHIVO PARA ESCRIBIR SCHEMES DE PACIENTES

const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    obra_social: Joi.string().required(),
    numero_afiliado:Joi.string().required()
})

module.exports = {
    crearPaciente
}