import cors from 'cors';

const corsOptions = {
    origin: ['https://ecomar.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
