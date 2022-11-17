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
    },
    {
      id: '2',
      name: 'Nhoj',
      birthDate: '01-02-2107',
      cpf: '00000000000',
      zipCode: 'erehwyna',
      age: '22'  
    },
    {
      id: '3',
      name: 'Honj',
      birthDate: '10-10-2007',
      cpf: '00000000000',
      zipCode: 'hwynaere',
      age: '22'  
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};