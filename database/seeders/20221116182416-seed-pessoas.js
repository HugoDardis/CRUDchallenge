'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      id: '1',
      name: 'John',
      birthDate: '07-12-2000',
      cpf: '00000000000',
      zipCode: 'anywhere',
      age: '22'  
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};