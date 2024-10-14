import { DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export const Event = database.define('Event', {
    event_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    event_type: {
        type: DataTypes.ENUM('mutirão', 'educativo', 'congresso'),
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
    tableName: 'Event',
    timestamps: true,
});
