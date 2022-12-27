import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string | null;
  mobile!: string | null;
  departament!: string | null;
  verificationCode!: string | null;
  emailChecked!: number;
  createdAt!: Date;
  updatedAt!: Date;
  cashforceAdm!: number;
}

User.init({
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
  email: {
    allowNull: false,
    unique: true,
    type: STRING,
  },
  phoneNumber: {
    defaultValue: null,
    type: STRING,
  },
  mobile: {
    defaultValue: null,
    type: STRING,
  },
  departament: {
    defaultValue: null,
    type: STRING,
  },
  verificationCode: {
    defaultValue: null,
    type: STRING,
  },
  emailChecked: {
    defaultValue: 0,
    type: INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
  },
  cashforceAdm: {
    defaultValue: 1,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'users',
});

export default User;
