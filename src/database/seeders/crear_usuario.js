// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
const bcrypt = require("bcryptjs");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "María",
                    apellido: "Perez",
                    email: "algo♠4algo.com",
                    password: bcrypt.hashSync('123',10),
                    edad: 55
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Parade",
                    email: "juanp@algo.com",
                    password:bcrypt.hashSync('12345',10),
                    edad: 32
                }
            })
        ])
    },
};