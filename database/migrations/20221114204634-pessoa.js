'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        //autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,
      },
      zipCode: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false,
      },
      age: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');
  }
};