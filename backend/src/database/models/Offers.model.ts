import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Order from './Orders.model';
import Sponsor from './Sponsors.model';

class Offer extends Model {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: Date;
  paymentStatusSponsor!: number;
  paymentStatusProvider!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
  sponsorId!: number | null;
}

Offer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  tax: {
    allowNull: false,
    type: STRING,
  },
  tariff: {
    allowNull: false,
    type: STRING,
  },
  adValorem: {
    allowNull: false,
    type: STRING,
  },
  float: {
    allowNull: false,
    type: STRING,
  },
  iof: {
    allowNull: false,
    type: STRING,
  },
  expiresIn: {
    allowNull: false,
    type: DATE,
  },
  paymentStatusSponsor: {
    defaultValue: 0,
    type: INTEGER,
  },
  paymentStatusProvider: {
    defaultValue: 0,
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
  sponsorId: {
    defaultValue: null,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'offers',
});

Order.hasMany(Offer, { foreignKey: 'orderId', as: 'offers' });
Sponsor.hasMany(Offer, { foreignKey: 'sponsorId', as: 'offers' });

Offer.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
Offer.belongsTo(Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });

export default Offer;
