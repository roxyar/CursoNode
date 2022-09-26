// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Ana",
                    apellido: "Garcia",
                    email: "prueba@prueba.com",
                    especialidad: "Clinico",
                    tiempo_trabajando:"1"
                }
            })
        ])}
};