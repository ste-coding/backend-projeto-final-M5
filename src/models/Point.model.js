import { DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export const Point = database.define('Point', {
    point_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    waste_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    operating_hours: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('approved', 'pending', 'rejected'),
        allowNull: false,
        defaultValue: 'pending'
    },
    created_by: {
        type: DataTypes.UUID, // FK
        allowNull: false,
    },
}, {
    tableName: 'Point',
    timestamps: true,
});

