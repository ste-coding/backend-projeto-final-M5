import { DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export const User = database.define('User',
    {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true // Adicionar unique para garantir que o email seja único
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cpf: {
            type: DataTypes.CHAR(11),
        },
        phone: {
            type: DataTypes.CHAR(15),
        },
        tipo_usuario: {
            type: DataTypes.ENUM('admin', 'regular'), 
            allowNull: false
        }
    }, 
    {
        tableName: 'User', // evitando pluralização
        timestamps: true,
    }
);
