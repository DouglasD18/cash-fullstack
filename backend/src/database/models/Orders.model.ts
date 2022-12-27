import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs.model';
import User from './Users.model';
import Buyer from './Buyers.model';
import Provider from './Providers.model';

class Order extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string | null;
  orderPath!: string | null;
  orderFileName!: string | null;
  orderOriginalName!: string | null;
  emissionDate!: string | null;
  pdfFile!: string | null;
  emitedTo!: string | null;
  nNf!: string | null;
  CTE!: string | null;
  value!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number | null;
  userId!: number | null;
  buyerId!: number | null;
  providerId!: number | null;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string | null;
  cargoPackingList!: string | null;
  deliveryCtrc!: string | null;
}

Order.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  orderNfId: {
    allowNull: false,
    unique: true,
    type: STRING,
  },
  orderNumber: {
    allowNull: false,
    type: STRING,
  },
  orderPath: {
    defaultValue: null,
    unique: true,
    type: STRING,
  },
  orderFileName: {
    defaultValue: null,
    unique: true,
    type: STRING,
  },
  orderOriginalName: {
    defaultValue: null,
    unique: true,
    type: STRING,
  },
  emissionDate: {
    defaultValue: null,
    type: STRING,
  },
  pdfFile: {
    defaultValue: null,
    type: STRING,
  },
  emitedTo: {
    defaultValue: null,
    type: STRING,
  },
  nNf: {
    defaultValue: null,
    type: STRING,
  },
  CTE: {
    defaultValue: null,
    type: STRING,
  },
  value: {
    defaultValue: null,
    type: STRING,
  },
  createdAt: {
    allowNull: false,
    type: DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
  },
  cnpjId: {
    defaultValue: null,
    type: INTEGER,
  },
  userId: {
    defaultValue: null,
    type: INTEGER,
  },
  buyerId: {
    defaultValue: null,
    type: INTEGER,
  },
  providerId: {
    defaultValue: null,
    type: INTEGER,
  },
  orderStatusBuyer: {
    defaultValue: '0',
    type: STRING,
  },
  orderStatusProvider: {
    defaultValue: '0',
    type: STRING,
  },
  deliveryReceipt: {
    defaultValue: null,
    type: STRING,
  },
  cargoPackingList: {
    defaultValue: null,
    type: STRING,
  },
  deliveryCtrc: {
    defaultValue: null,
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'orders',
});

Cnpj.hasMany(Order, { foreignKey: 'cnpjId', as: 'orders' });
User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });
Buyer.hasMany(Order, { foreignKey: 'buyerId', as: 'orders' });
Provider.hasMany(Order, { foreignKey: 'providerId', as: 'orders' });

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

export default Order;
