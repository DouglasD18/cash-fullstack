import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs.model';

class Buyer extends Model {
  id!: number;
  name!: string;
  tradingName!: string | null;
  cashforceTax!: string | null;
  responsibleName!: string | null;
  responsibleEmail!: string | null;
  responsiblePosition!: string | null;
  responsiblePhone!: string | null;
  responsibleMobile!: string | null;
  website!: string | null;
  postalCode!: string | null;
  address!: string | null;
  number!: string | null;
  complement!: string | null;
  neighborhood!: string | null;
  city!: string | null;
  state!: string | null;
  phoneNumber!: string | null;
  situation!: string | null;
  situationDate!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number | null;
  confirm!: number;
  email!: string | null;
}

Buyer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  tradingName: {
    defaultValue: null,
    type: STRING,
  },
  cashforceTax: {
    defaultValue: null,
    type: STRING,
  },
  responsibleName: {
    defaultValue: null,
    type: STRING,
  },
  responsibleEmail: {
    defaultValue: null,
    type: STRING,
  },
  responsiblePosition: {
    defaultValue: null,
    type: STRING,
  },
  responsiblePhone: {
    defaultValue: null,
    type: STRING,
  },
  responsibleMobile: {
    defaultValue: null,
    type: STRING,
  },
  website: {
    defaultValue: null,
    type: STRING,
  },
  postalCode: {
    defaultValue: null,
    type: STRING,
  },
  address: {
    defaultValue: null,
    type: STRING,
  },
  number: {
    defaultValue: null,
    type: STRING,
  },
  complement: {
    defaultValue: null,
    type: STRING,
  },
  neighborhood: {
    defaultValue: null,
    type: STRING,
  },
  city: {
    defaultValue: null,
    type: STRING,
  },
  state: {
    defaultValue: null,
    type: STRING,
  },
  phoneNumber: {
    defaultValue: null,
    type: STRING,
  },
  situation: {
    defaultValue: null,
    type: STRING,
  },
  situationDate: {
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
  confirm: {
    type: INTEGER,
    defaultValue: 1
  },
  email: {
    defaultValue: null,
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'buyers',
});

Cnpj.hasMany(Buyer, { foreignKey: 'cnpjId', as: 'buyers' });

Buyer.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

export default Buyer;
