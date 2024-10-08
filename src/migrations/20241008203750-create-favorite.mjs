'use strict';

import { DataTypes } from 'sequelize';

export default {
  async up(queryInterface) {
    await queryInterface.createTable('Favorite', {
      favorite_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      point_id: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      event_id: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Favorite');
  },
};
