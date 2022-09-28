'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('usuario', 'activo', {
                type: Sequelize.TINYINT(1),
                allowNull: false,
                defaultValue:1
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('usuarios');
    */
    }
};