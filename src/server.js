import express from 'express';
import cors from 'cors';
import { database } from './config/connection.js'; // Certifique-se de que o caminho está correto

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    try {
        await database.authenticate();
        console.log('Conexão com banco de dados estabelecida com sucesso');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
});
