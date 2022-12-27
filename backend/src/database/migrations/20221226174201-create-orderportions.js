'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      availableToMarket: {
        defaultValue: 1,
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
    }, {
      initialAutoIcrement: 612
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('orderportions');
  }
};
