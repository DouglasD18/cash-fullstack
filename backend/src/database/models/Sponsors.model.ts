import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs.model';

class Sponsor extends Model {
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
  bank!: string | null;
  bankAgency!: string | null;
  account!: string | null;
  phoneNumber!: string | null;
  situation!: string | null;
  situationDate!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number | null;
  email!: string | null;
}

Sponsor.init({
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
  bank: {
    defaultValue: null,
    type: STRING,
  },
  bankAgency: {
    defaultValue: null,
    type: STRING,
  },
  account: {
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
  email: {
    defaultValue: null,
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'sponsors',
});

Cnpj.hasMany(Sponsor, { foreignKey: 'cnpjId', as: 'sponsors' });

Sponsor.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

export default Sponsor;
