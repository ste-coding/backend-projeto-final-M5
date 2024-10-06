import { database } from './connection.js';
import { User } from '../models/User.model.js';
import { Point } from '../models/Point.model.js';
import { Event } from '../models/Event.model.js';
import { Favorite } from '../models/Favorite.model.js';
import { Registration } from '../models/Registration.model.js';
import initializeAssociations from './associations.js';

const syncDatabase = async () => {
    try {
        await database.authenticate();
        console.log('Conexão com banco de dados estabelecida com sucesso');

        await User.sync({ alter: true });
        await Point.sync({ alter: true });
        await Event.sync({ alter: true });
        await Favorite.sync({ alter: true });
        await Registration.sync({ alter: true });
        
        console.log('Tabelas sincronizadas com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ou sincronizar com o banco de dados:', error);
    }
};

const initializeDatabase = async () => {
    initializeAssociations();
    await syncDatabase();
};

export { syncDatabase, initializeDatabase };
