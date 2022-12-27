import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Order from './Orders.model';

class OrderPortion extends Model {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
}

OrderPortion.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  nDup: {
    allowNull: false,
    type: STRING,
  },
  dVenc: {
    allowNull: false,
    type: STRING,
  },
  vDup: {
    allowNull: false,
    type: DATE,
  },
  availableToMarket: {
    defaultValue: 1,
    type: INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
  },
  orderId: {
    defaultValue: null,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'orderportions',
});

Order.hasOne(OrderPortion, { foreignKey: 'orderId', as: 'orderportions' });

OrderPortion.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

export default OrderPortion;
