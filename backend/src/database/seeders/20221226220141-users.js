'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          id: 1,
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cashforceAdm: 1
        }
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
