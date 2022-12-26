'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      departament: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      emailChecked: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cashforceAdm: {
        defaultValue: 1,
        type: Sequelize.TINYINT(1),
      },
    }, {
      initialAutoIncrement: 122
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
