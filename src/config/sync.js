import { database } from './connection.js';
import initializeAssociations from './associations.js';

const syncDatabase = async () => {
    try {
        await database.authenticate();
        console.log('Conexão com banco de dados estabelecida com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

const initializeDatabase = async () => {
    initializeAssociations();
    await syncDatabase();
};

export { syncDatabase, initializeDatabase };
