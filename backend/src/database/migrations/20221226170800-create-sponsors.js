'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
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
      tradingName: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      cashforceTax: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      responsibleName: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      responsibleEmail: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      responsiblePosition: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      responsiblePhone: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      responsibleMobile: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      website: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      postalCode: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      address: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      number: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      complement: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      neighborhood: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      city: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      state: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      bank: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      bankAgency: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      account: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      situation: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      situationDate: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id',
        }
      },
      email: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
    }, {
      initialAutoIncrement: 17,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sponsors');
  }
};
