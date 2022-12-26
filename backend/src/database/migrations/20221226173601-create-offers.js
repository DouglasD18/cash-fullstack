'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paymentStatusSponsor: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
      paymentStatusProvider: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id',
        }
      },
      sponsorId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'sponsors',
          key: 'id',
        }
      },
    }, {
      initialAutoIncrement: 40
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
