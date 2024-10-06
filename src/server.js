import express from 'express';
import cors from 'cors';
import { database } from './config/connection.js';
import authRoutes from './routes/auth.routes.js';
import { User } from './models/User.model.js'; // retirar depois, temporariamente aqui para testar se a tabela está sincronizada

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    try {
        await database.authenticate();
        console.log('Conexão com banco de dados estabelecida com sucesso');

        await User.sync({ alter: true });
        console.log('Tabela User sincronizada com sucesso');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
});
