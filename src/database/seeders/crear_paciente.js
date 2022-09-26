// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Lpez",
                    email: "JuanL@prueba.com",
                    documento:"12222222",
                    obra_social: "IOMA",
                    numero_afiliado:"11212122/99"
                }
            })
        ])}
};