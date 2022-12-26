'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      orderNfId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255),
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING(255),
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING(255),
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING(255),
      },
      emissonDate: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      emitedTo: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      nNf: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      value: {
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
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'buyers',
          key: 'id',
        }
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        onUpdate: null,
        onDelete: 'CASCADE',
        references: {
          model: 'providers',
          key: 'id',
        }
      },
      orderStatusBuyer: {
        defaultValue: 0,
        type: Sequelize.STRING(255),
      },
      orderStatusProvider: {
        defaultValue: 0,
        type: Sequelize.STRING(255),
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
      deliveryCtrc: {
        defaultValue: null,
        type: Sequelize.STRING(255),
      },
    }, {
      initialAutoIncrement: 540
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
