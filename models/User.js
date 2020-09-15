"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      first_name: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [4, 10],
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [8, 12],
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [7, 100],
        isEmail: true,
      },
      permission_id: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
      },
      updated_at: { type: DataTypes.DATE },
      deleted_at: { type: DataTypes.DATE },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
